"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, ShieldCheck, Database, Zap, CheckCircle2 } from "lucide-react";

const date = new Date();

export default function About() {
  const stats = [
    { label: "Years Experience", value: date.getFullYear() - 2023 + "+" },
    { label: "Production Apps", value: "10+" },
    { label: "Core Tech Stacks", value: "3" },
    { label: "Security Isolation", value: "100%" },
  ];

  const focusAreas = [
    {
      icon: <Cpu className="h-5 w-5 text-cyan-400" />,
      title: "Scalable Frontend Systems",
      desc: "Architecting Next.js layouts with TypeScript, Zustands, and optimizing loading state triggers.",
    },
    {
      icon: <Database className="h-5 w-5 text-emerald-400" />,
      title: "Engineered Backend Pipelines",
      desc: "Express server structures using Sequelize or Mongoose schemas for Postgres and MongoDB.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-rose-400" />,
      title: "Authentication architectures",
      desc: "Robust login ecosystems using NextAuth v5 and JWT isolation protocols across subdomains.",
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      title: "Interactive UX Engineering",
      desc: "High-performance scroll-driven animations with GSAP and responsive micro-animations.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Light background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Bio & Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Engineering Focus</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 leading-tight">
              Designing High-Performance Digital Architectures
            </h2>

            <p className="text-zinc-300 text-base font-light leading-relaxed">
              {portfolioData.personalInfo.bio}
            </p>

            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Based in Dhaka, Bangladesh, I bridge the gap between heavy API engineering and rich, polished user interfaces. Whether it is a multi-tenant session isolation layout, custom MERN dashboards, or GSAP micro-animations, I design with absolute execution and scalability.
            </p>

            {/* List checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                "Clean Architecture Separation",
                "Advanced State Hydration",
                "JWT Tenant Encryption Isolation",
                "Optimized Web Engine Core",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Stats Panel & Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">

            {/* Stats Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-zinc-900 bg-zinc-950/80 backdrop-blur-md flex flex-col gap-1.5"
                >
                  <span className="text-3xl font-extrabold text-zinc-100 font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* High-tech focus grid cards */}
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 backdrop-blur-md flex flex-col gap-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Focus Areas</span>
              <div className="flex flex-col gap-4">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 h-fit">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-300">{area.title}</h4>
                      <p className="text-[11px] text-zinc-500 font-light leading-relaxed mt-0.5">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
