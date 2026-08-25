"use client";

import React, { useState, useEffect } from "react";

interface TypingTitleProps {
  titles: string[];
}

export default function TypingTitle({ titles }: TypingTitleProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(cursorTimeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      const delayTimeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(delayTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const typingTimeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 75 : 120
    );

    return () => clearTimeout(typingTimeout);
  }, [subIndex, reverse, index, titles]);

  return (
    <div className="flex items-center justify-center md:justify-start min-h-[40px]">
      <span className="text-xl md:text-3xl font-mono font-bold tracking-tight text-emerald-400 bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
        {titles[index].substring(0, subIndex)}
      </span>
      <span
        className={`inline-block ml-1 w-2.5 h-6 md:h-8 bg-emerald-400 transition-opacity duration-100 ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
