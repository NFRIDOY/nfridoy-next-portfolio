"use client";

import React from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { FolderGit2, ArrowUpRight, Github, Globe } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-950 via-zinc-950 to-black relative overflow-hidden">
      {/* Background neon flares */}
      <div className="absolute bottom-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Featured Builds</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
              Architected Products
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md font-light text-sm leading-relaxed">
            A selection of production-grade ecosystems encompassing logistics pipelines, robust multi-tenant authorization engines, and real-time dashboards.
          </p>
        </div>

        {/* Projects Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project: Project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className="group relative rounded-3xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-zinc-800 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
              {/* Corner Glow Overlay */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-emerald-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div>
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800/80 text-emerald-400 group-hover:text-zinc-100 transition-colors">
                    <FolderGit2 className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <span>Prod Build</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-2 mb-8 border-t border-zinc-900 pt-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.id}
                      className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 transition-colors"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all"
                  >
                    <Github className="h-3.5 w-3.5" /> Source Code
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 text-xs font-mono font-bold text-zinc-950 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
