import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#18181B",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <rect x="7" y="5" width="4" height="22" rx="2" fill="white" />
          <path d="M11 5h6a6 6 0 0 1 0 12h-6z" fill="#2563EB" />
          <path d="M11 15h7a7 7 0 0 1 0 14h-7z" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
