"use client";

import React, { useState } from "react";
import { portfolioData, Skill } from "@/data/portfolioData";
import {
  Code2,
  Database,
  Terminal,
  Cpu,
  Shield,
  Layers,
  Sparkles,
  GitBranch,
  ExternalLink,
  ChevronRight
} from "lucide-react";

// Helper component to display stylized premium icons
function SkillIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase();
  
  let iconElement = <Code2 className="h-5 w-5" />;
  let glowColor = "group-hover:text-emerald-400";
  let bgGlow = "group-hover:bg-emerald-500/10 border-emerald-500/20";

  if (normalized.includes("next.js") || normalized.includes("react")) {
    iconElement = <Cpu className="h-5 w-5 text-cyan-400" />;
    glowColor = "text-cyan-400";
    bgGlow = "bg-cyan-500/5 border-cyan-500/20";
  } else if (normalized.includes("typescript")) {
    iconElement = <Code2 className="h-5 w-5 text-blue-400" />;
    glowColor = "text-blue-400";
    bgGlow = "bg-blue-500/5 border-blue-500/20";
  } else if (normalized.includes("tailwind")) {
    iconElement = <Layers className="h-5 w-5 text-sky-400" />;
    glowColor = "text-sky-400";
    bgGlow = "bg-sky-500/5 border-sky-500/20";
  } else if (normalized.includes("gsap") || normalized.includes("framer")) {
    iconElement = <Sparkles className="h-5 w-5 text-amber-400" />;
    glowColor = "text-amber-400";
    bgGlow = "bg-amber-500/5 border-amber-500/20";
  } else if (normalized.includes("state") || normalized.includes("zustand")) {
    iconElement = <Layers className="h-5 w-5 text-violet-400" />;
    glowColor = "text-violet-400";
    bgGlow = "bg-violet-500/5 border-violet-500/20";
  } else if (normalized.includes("node") || normalized.includes("express")) {
    iconElement = <Terminal className="h-5 w-5 text-green-400" />;
    glowColor = "text-green-400";
    bgGlow = "bg-green-500/5 border-green-500/20";
  } else if (normalized.includes("mongodb") || normalized.includes("mongoose")) {
    iconElement = <Database className="h-5 w-5 text-emerald-400" />;
    glowColor = "text-emerald-400";
    bgGlow = "bg-emerald-500/5 border-emerald-500/20";
  } else if (normalized.includes("sequelize") || normalized.includes("sql")) {
    iconElement = <GitBranch className="h-5 w-5 text-indigo-400" />;
    glowColor = "text-indigo-400";
    bgGlow = "bg-indigo-500/5 border-indigo-500/20";
  } else if (normalized.includes("auth") || normalized.includes("jwt")) {
    iconElement = <Shield className="h-5 w-5 text-rose-400" />;
    glowColor = "text-rose-400";
    bgGlow = "bg-rose-500/5 border-rose-500/20";
  } else if (normalized.includes("api") || normalized.includes("graphql")) {
    iconElement = <Terminal className="h-5 w-5 text-purple-400" />;
    glowColor = "text-purple-400";
    bgGlow = "bg-purple-500/5 border-purple-500/20";
  } else if (normalized.includes("git")) {
    iconElement = <GitBranch className="h-5 w-5 text-orange-400" />;
    glowColor = "text-orange-400";
    bgGlow = "bg-orange-500/5 border-orange-500/20";
  } else if (normalized.includes("docker")) {
    iconElement = <Layers className="h-5 w-5 text-blue-500" />;
    glowColor = "text-blue-500";
    bgGlow = "bg-blue-500/5 border-blue-500/20";
  }

  return (
    <div className={`p-3 rounded-xl border transition-all duration-300 ${bgGlow} flex items-center justify-center`}>
      {iconElement}
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "tools">("all");

  const filterSkills = () => {
    const { frontend, backend, toolsAndWorkflow } = portfolioData.skills;
    if (activeTab === "frontend") return frontend;
    if (activeTab === "backend") return backend;
    if (activeTab === "tools") return toolsAndWorkflow;
    return [...frontend, ...backend, ...toolsAndWorkflow];
  };

  const getTabCount = (tab: typeof activeTab) => {
    const { frontend, backend, toolsAndWorkflow } = portfolioData.skills;
    if (tab === "frontend") return frontend.length;
    if (tab === "backend") return backend.length;
    if (tab === "tools") return toolsAndWorkflow.length;
    return frontend.length + backend.length + toolsAndWorkflow.length;
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 h-[250px] w-[250px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Stack & Skills</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
              Technical Expertise
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md font-light text-sm leading-relaxed">
            Engineered with modern paradigms. Deep competency in client-side interactive frameworks, database layer scaling, and secured APIs.
          </p>
        </div>

        {/* Tab Selection Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-zinc-900 pb-6">
          {[
            { id: "all", label: "All Tech" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend" },
            { id: "tools", label: "Tools & Workflow" }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-zinc-100 border-zinc-100 text-zinc-950 shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
                    : "bg-zinc-900/50 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-zinc-200 text-zinc-950" : "bg-zinc-800 text-zinc-500"
                }`}>
                  {getTabCount(tab.id as any)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills().map((skill: Skill, idx) => (
            <a
              key={`${skill.name}-${idx}`}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl border border-zinc-900 bg-zinc-950 p-6 overflow-hidden transition-all duration-500 hover:border-zinc-800 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              {/* Background gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <SkillIcon name={skill.name} />
                  <div>
                    <h3 className="text-zinc-200 font-semibold text-base group-hover:text-zinc-100 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {skill.level}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {skill.exp} Experience
                      </span>
                    </div>
                  </div>
                </div>

                <ExternalLink className="h-3.5 w-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors mt-1" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
