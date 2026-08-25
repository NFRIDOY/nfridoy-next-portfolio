"use client";

import React, { useState } from "react";
import { portfolioData, Skill } from "@/data/portfolioData";
import {
  Code2,
  Database,
  Terminal,
  Shield,
  Layers,
  Sparkles,
  GitBranch,
  ExternalLink,
} from "lucide-react";

const SKILL_COLORS: Record<string, { text: string; bg: string; border: string }> = {
  "devicon-nextjs-plain": { text: "text-white", bg: "bg-white/5", border: "border-white/20" },
  "devicon-react-original": { text: "text-cyan-400", bg: "bg-cyan-500/5", border: "border-cyan-500/20" },
  "devicon-typescript-plain": { text: "text-blue-400", bg: "bg-blue-500/5", border: "border-blue-500/20" },
  "devicon-tailwindcss-plain": { text: "text-sky-400", bg: "bg-sky-500/5", border: "border-sky-500/20" },
  "devicon-gsap-plain": { text: "text-emerald-400", bg: "bg-emerald-500/5", border: "border-emerald-500/20" },
  "devicon-redux-original": { text: "text-violet-400", bg: "bg-violet-500/5", border: "border-violet-500/20" },
  "devicon-nodejs-plain": { text: "text-green-400", bg: "bg-green-500/5", border: "border-green-500/20" },
  "devicon-express-original": { text: "text-green-300", bg: "bg-green-500/5", border: "border-green-500/20" },
  "devicon-nestjs-plain": { text: "text-rose-400", bg: "bg-rose-500/5", border: "border-rose-500/20" },
  "devicon-mongodb-plain": { text: "text-emerald-400", bg: "bg-emerald-500/5", border: "border-emerald-500/20" },
  "devicon-sequelize-plain": { text: "text-indigo-400", bg: "bg-indigo-500/5", border: "border-indigo-500/20" },
  "devicon-graphql-plain": { text: "text-pink-400", bg: "bg-pink-500/5", border: "border-pink-500/20" },
  "devicon-git-plain": { text: "text-orange-400", bg: "bg-orange-500/5", border: "border-orange-500/20" },
  "devicon-github-plain": { text: "text-zinc-300", bg: "bg-zinc-500/5", border: "border-zinc-500/20" },
  "devicon-vercel-plain": { text: "text-zinc-200", bg: "bg-zinc-500/5", border: "border-zinc-500/20" },
  "devicon-vscode-plain": { text: "text-blue-400", bg: "bg-blue-500/5", border: "border-blue-500/20" },
  "devicon-docker-plain": { text: "text-blue-500", bg: "bg-blue-500/5", border: "border-blue-500/20" },
};

const FALLBACK_ICONS: Record<string, React.ReactNode> = {
  shield: <Shield className="h-5 w-5 text-rose-400" />,
  terminal: <Terminal className="h-5 w-5 text-purple-400" />,
  database: <Database className="h-5 w-5 text-emerald-400" />,
  layers: <Layers className="h-5 w-5 text-sky-400" />,
  sparkles: <Sparkles className="h-5 w-5 text-amber-400" />,
  gitbranch: <GitBranch className="h-5 w-5 text-orange-400" />,
};

function getFallback(name: string): { icon: React.ReactNode; color: string; bg: string; border: string } {
  const n = name.toLowerCase();
  if (n.includes("auth") || n.includes("jwt")) return { icon: FALLBACK_ICONS.shield, color: "text-rose-400", bg: "bg-rose-500/5", border: "border-rose-500/20" };
  if (n.includes("api") || n.includes("graphql")) return { icon: FALLBACK_ICONS.terminal, color: "text-purple-400", bg: "bg-purple-500/5", border: "border-purple-500/20" };
  if (n.includes("postman")) return { icon: FALLBACK_ICONS.terminal, color: "text-amber-400", bg: "bg-amber-500/5", border: "border-amber-500/20" };
  return { icon: <Code2 className="h-5 w-5 text-zinc-400" />, color: "text-zinc-400", bg: "bg-zinc-500/5", border: "border-zinc-500/20" };
}

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.devicon) {
    const colors = SKILL_COLORS[skill.devicon] ?? { text: "text-zinc-400", bg: "bg-zinc-500/5", border: "border-zinc-500/20" };
    return (
      <div className={`p-3 rounded-xl border transition-all duration-300 ${colors.bg} ${colors.border} flex items-center justify-center`}>
        <i className={`${skill.devicon} ${colors.text} text-2xl`} />
      </div>
    );
  }

  const fallback = getFallback(skill.name);
  return (
    <div className={`p-3 rounded-xl border transition-all duration-300 ${fallback.bg} ${fallback.border} flex items-center justify-center`}>
      {fallback.icon}
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "tools">("all");

  const filterSkills = () => {
    const { frontend, backend, tools } = portfolioData.skills;
    if (activeTab === "frontend") return frontend;
    if (activeTab === "backend") return backend;
    if (activeTab === "tools") return tools;
    return [...frontend, ...backend, ...tools];
  };

  const getTabCount = (tab: typeof activeTab) => {
    const { frontend, backend, tools } = portfolioData.skills;
    if (tab === "frontend") return frontend.length;
    if (tab === "backend") return backend.length;
    if (tab === "tools") return tools.length;
    return frontend.length + backend.length + tools.length;
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
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${isActive
                  ? "bg-zinc-100 border-zinc-100 text-zinc-950 shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
                  : "bg-zinc-900/50 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? "bg-zinc-200 text-zinc-950" : "bg-zinc-800 text-zinc-500"
                  }`}>
                  {getTabCount(tab.id as any)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills().map((skill: Skill, idx: any) => (
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
                  <SkillIcon skill={skill} />
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
