import { NextResponse } from "next/server";
import { getAnthropic, anthropicModel } from "@/lib/anthropic";

export const runtime = "nodejs";

type ClaudeRequest = {
  prompt: string;
  system?: string;
  maxTokens?: number;
};

export async function POST(req: Request) {
  let body: ClaudeRequest;
  try {
    body = (await req.json()) as ClaudeRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body?.prompt || typeof body.prompt !== "string") {
    return NextResponse.json(
      { error: '`prompt` (string) is required' },
      { status: 400 },
    );
  }

  const max_tokens =
    typeof body.maxTokens === "number" && Number.isFinite(body.maxTokens)
      ? Math.max(1, Math.min(4096, Math.floor(body.maxTokens)))
      : 512;

  try {
    const anthropic = getAnthropic();
    const message = await anthropic.messages.create({
      model: anthropicModel,
      max_tokens,
      system: body.system,
      messages: [{ role: "user", content: body.prompt }],
    });

    const text = message.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("");

    return NextResponse.json({
      model: message.model,
      id: message.id,
      text,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Claude request failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

