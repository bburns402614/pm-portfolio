import Anthropic from "@anthropic-ai/sdk";

export const anthropicModel =
  process.env.ANTHROPIC_MODEL ?? "claude-3-7-sonnet-latest";

export function getAnthropic(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("Missing ANTHROPIC_API_KEY environment variable");
  }
  return new Anthropic({ apiKey });
}

