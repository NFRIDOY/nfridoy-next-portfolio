"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { portfolioData } from "@/data/portfolioData";
import TypingTitle from "./TypingTitle";
import { ArrowDown, GithubIcon, LinkedinIcon, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );

      // Slide & fade text elements sequentially
      if (textRef.current) {
        const elements = textRef.current.children;
        gsap.fromTo(
          elements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }

      // Pop & hover effect for profile picture
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
            delay: 0.4,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
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
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/60 via-zinc-950 to-black"
    >
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Radial Lights */}
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left: Text Content */}
        <div ref={textRef} className="md:col-span-7 flex flex-col gap-6 text-center md:text-left order-2 md:order-1">

          <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full w-fit mx-auto md:mx-0 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="h-2 w-2 rounded-full bg-emerald-500 -ml-4" />
            <span className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase">
              Available for New Projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100">
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">{portfolioData.personalInfo.name}</span>
          </h1>

          <TypingTitle titles={portfolioData.personalInfo.title} />

          <p className="text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
            {portfolioData.personalInfo.tagline}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-emerald-500" />
              <span>{portfolioData.personalInfo.location}</span>
            </div>
            <span className="h-4 w-[1px] bg-zinc-800" />
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4 text-emerald-500" />
              <span>{portfolioData.personalInfo.socials.email}</span>
            </div>
            <a href={portfolioData.personalInfo.socials.linkedin} className="flex items-center gap-1">
              <LinkedinIcon className="h-4 w-4 text-emerald-500" />
              <span>{portfolioData.personalInfo.socials.linkedin.split("/in/")[1]}</span>
            </a>
            <a href={portfolioData.personalInfo.socials.github} className="flex items-center gap-1">
              <GithubIcon className="h-4 w-4 text-emerald-500" />
              <span>{portfolioData.personalInfo.socials.github.split("/")[3]}</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold hover:bg-zinc-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)] text-sm"
            >
              Explore Projects
            </button>
            <button
              onClick={() => window.dispatchEvent(new Event("open-ai-chat"))}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-300 font-semibold hover:bg-zinc-900/60 hover:border-zinc-700 transition-all font-mono text-sm flex items-center justify-center gap-2"
            >
              Ask AI Assistant <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </button>
          </div>
        </div>

        {/* Right: Premium Profile Avatar & Glow Ring */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div
            ref={imageContainerRef}
            className="relative h-64 w-64 sm:h-80 sm:w-80 group cursor-pointer"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />

            {/* Animated Rotating Gradient Border */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-500 rounded-3xl opacity-60 group-hover:opacity-100 blur-[2px] transition-all duration-700 animate-[spin_8s_linear_infinite]" />

            {/* Inner Content Card */}
            <div className="absolute inset-0 rounded-3xl bg-zinc-950 overflow-hidden border border-zinc-900 flex items-center justify-center shadow-2xl">
              <Image
                src={portfolioData.personalInfo.imgae}
                alt={portfolioData.personalInfo.name}
                width={320}
                height={320}
                className="h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                priority
              />

              {/* Sci-Fi Overlay elements */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 px-3 py-2 rounded-xl flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider">ENGINE REVS</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">100% SECURE</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest">Scroll Down</span>
        <ArrowDown className="h-4 w-4 animate-bounce group-hover:translate-y-1 transition-transform" />
      </button>

    </section>
  );
}
