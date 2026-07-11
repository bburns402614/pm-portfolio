"use client";

import { useState } from "react";

export default function DownloadResumeButton() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleDownload() {
    setStatus("loading");
    try {
      // Sequential imports — avoids destructuring issues with CJS modules in Next.js
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const element = document.getElementById("resume-content");
      if (!element) throw new Error("resume-content not found");

      // Temporarily un-sticky the sidebar so it renders in flow position
      const sidebar = element.querySelector("aside") as HTMLElement | null;
      const prevPosition = sidebar?.style.position ?? "";
      if (sidebar) sidebar.style.position = "relative";

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#FAFAFA",
        logging: false,
      });

      if (sidebar) sidebar.style.position = prevPosition;

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      const imgH = (canvas.height * pdfW) / canvas.width;

      let remaining = imgH;
      let offset = 0;

      pdf.addImage(imgData, "PNG", 0, offset, pdfW, imgH);
      remaining -= pdfH;

      while (remaining > 0) {
        offset = remaining - imgH;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, offset, pdfW, imgH);
        remaining -= pdfH;
      }

      pdf.save("Breanna-Burns-Resume.pdf");
      setStatus("idle");
    } catch (err) {
      console.error("PDF generation failed:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={status === "loading"}
      className="print:hidden inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      {status === "loading" && (
        <>
          <svg aria-hidden="true" className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Generating…
        </>
      )}
      {status === "error" && "Try again"}
      {status === "idle" && (
        <>
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
          </svg>
          Download Resume
        </>
      )}
    </button>
  );
}
