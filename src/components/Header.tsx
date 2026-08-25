"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Download, FileText } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 text-left"
        >
          <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-500 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
            NF RIDOY
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-950/30">
            Full-Stack
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {["about", "skills", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-wider text-[11px]"
            >
              {section}
            </button>
          ))}
          <button
            onClick={() => { setIsOpen(false); window.dispatchEvent(new Event("open-ai-chat")); }}
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider text-[11px] flex items-center gap-1 font-mono"
          >
            <span>Ask AI</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </button>
          <a
            href="/resume"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-wider text-[11px] flex items-center gap-1"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Actions / Socials */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={portfolioData.personalInfo.cvlink}
            download
            className="text-xs flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-md transition-all font-mono"
          >
            <Download className="h-3 w-3" />
            Download CV
          </a>
          <a
            href={portfolioData.personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-md transition-all font-mono"
          >
            GitHub
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.socials.email}`}
            className="text-xs flex items-center gap-1 text-zinc-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 font-semibold px-4 py-1.5 rounded-md transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)]"
          >
            Hire Me <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[72px] z-40 w-full bg-zinc-950/98 backdrop-blur-lg border-t border-zinc-900 transition-all duration-300 md:hidden flex flex-col justify-between p-8 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-left">
          {["about", "skills", "projects"].map((section, idx) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-2xl font-semibold tracking-wide text-zinc-300 hover:text-emerald-400 transition-colors text-left py-2 border-b border-zinc-900"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button
            onClick={() => { setIsOpen(false); window.dispatchEvent(new Event("open-ai-chat")); }}
            className="text-2xl font-semibold tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors text-left py-2 flex items-center gap-2"
          >
            <span>Ask AI Assistant</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </button>
          <a
            href="/resume"
            className="text-2xl font-semibold tracking-wide text-zinc-300 hover:text-emerald-400 transition-colors text-left py-2 flex items-center gap-2 border-b border-zinc-900"
          >
            <FileText className="h-5 w-5" />
            <span>Preview Resume</span>
          </a>
          <a
            href={portfolioData.personalInfo.cvlink}
            download
            className="text-2xl font-semibold tracking-wide text-zinc-300 hover:text-emerald-400 transition-colors text-left py-2 flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            <span>Download CV</span>
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <a
              href={portfolioData.personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center py-3 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all font-mono text-sm"
            >
              GitHub
            </a>
            <a
              href={portfolioData.personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center py-3 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all font-mono text-sm"
            >
              LinkedIn
            </a>
          </div>
          <a
            href={`mailto:${portfolioData.personalInfo.socials.email}`}
            className="w-full flex justify-center items-center gap-2 py-4 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 font-bold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(52,211,153,0.2)]"
          >
            Email Me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
