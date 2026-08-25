"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
// import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-zinc-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

        {/* Brand Left */}
        <div className="flex flex-col gap-1.5 text-center md:text-left">
          <span className="text-sm font-bold tracking-wider text-zinc-100">
            {portfolioData.personalInfo.name}
          </span>
          <span className="text-[10px] font-mono text-zinc-500">
            © {new Date().getFullYear()} • Designed & Built with Next.js & GSAP
          </span>
        </div>

        {/* Social Icons Middle */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:border-zinc-800 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={portfolioData.personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:border-zinc-800 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.socials.email}`}
            className="p-2.5 rounded-lg border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:border-zinc-800 transition-all"
            aria-label="Email Address"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Scroll Top Right */}
        <button
          onClick={scrollToTop}
          className="group p-2.5 rounded-lg border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:border-zinc-800 transition-all cursor-pointer flex items-center gap-1.5 text-[10px] font-mono"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
