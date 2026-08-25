import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Resume | NF RIDOY",
  description: "Preview and download the resume of Md Noman Faysal Ridoy - Full-Stack Web Developer.",
};

export default function ResumePage() {
  const cvUrl = portfolioData.personalInfo.cvlink;

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">Md Noman Faysal Ridoy</span>
          <a
            href={cvUrl}
            download
            className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
          >
            <Download className="h-3.5 w-3.5" />
            Download PDF
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-4xl h-[calc(100vh-80px)] rounded-xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <iframe
            src={`${cvUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full bg-zinc-900"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
}
