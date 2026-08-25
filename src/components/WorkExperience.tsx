"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import {
  WORK_EXPERIENCE_DATA,
  TimelineItem,
} from "@/data/workExperience.data";

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const isRight = item.position === "right";

  return (
    <div className="relative flex items-start md:justify-center md:gap-0">
      {/* Desktop alternating layout */}
      <div className="hidden md:grid md:grid-cols-12 md:items-start md:w-full">
        {/* Left content */}
        <div
          className={`col-span-5 ${isRight ? "order-1" : "order-3 text-right"}`}
        >
          {!isRight && (
            <div className="pb-12">
              <span className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
                {item.period}
              </span>
              <h4 className="text-base font-bold text-gray-800 mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm ml-auto">
                {item.description}
              </p>
            </div>
          )}
        </div>

        {/* Center node */}
        <div className="col-span-2 flex justify-center relative order-2">
          <div className="w-4 h-4 rounded-full border-2 border-purple-500 bg-white z-10 mt-1" />
        </div>

        {/* Right content */}
        <div
          className={`col-span-5 ${isRight ? "order-3" : "order-1"}`}
        >
          {isRight && (
            <div className="pb-12">
              <span className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
                {item.period}
              </span>
              <h4 className="text-base font-bold text-gray-800 mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full border-2 border-purple-500 bg-white z-10 shrink-0 mt-1" />
          {index < WORK_EXPERIENCE_DATA.length - 1 && (
            <div className="flex-1 border-l-2 border-purple-400" />
          )}
        </div>
        <div className="pb-8 flex-1">
          <span className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
            {item.period}
          </span>
          <h4 className="text-base font-bold text-gray-800 mb-1">
            {item.title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  const currentItem = WORK_EXPERIENCE_DATA.find((item) => item.isCurrent);
  const timelineItems = WORK_EXPERIENCE_DATA.filter(
    (item) => !item.isCurrent
  );

  return (
    <section id="experience" className="w-full">
      <div className="md:grid md:grid-cols-12 min-h-screen">
        {/* ── Left Column: Timeline ── */}
        <div className="md:col-span-7 bg-white px-6 sm:px-10 lg:px-16 py-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Work Experience
          </h2>

          {/* Timeline container with vertical line */}
          <div className="relative border-l-2 border-purple-400 ml-2 md:ml-0 md:border-l-0 md:border-none">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-2 border-purple-400 -translate-x-1/2" />

            {timelineItems.map((item, idx) => (
              <TimelineEntry key={item.id} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* ── Right Column: Featured Sidebar ── */}
        {currentItem && (
          <div className="md:col-span-5 bg-purple-600 relative overflow-hidden px-6 sm:px-10 lg:px-14 py-20 flex flex-col justify-center">
            {/* Hex pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10 text-white">
              {/* Badge */}
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
              </div>

              {/* Period */}
              <h3 className="text-3xl font-extrabold text-white mb-8">
                {currentItem.period}
              </h3>

              {/* Highlights */}
              <div className="flex flex-col gap-8">
                {currentItem.sidebarHighlights?.map((hl) => (
                  <div key={hl.id}>
                    <h4 className="font-bold text-lg text-white mb-1">
                      {hl.heading}
                    </h4>
                    <p className="text-sm text-purple-100 opacity-90 leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
