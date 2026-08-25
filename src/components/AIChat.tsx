"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { portfolioData } from "@/data/portfolioData";
import { MessageSquare, Send, Sparkles, User, Cpu, X } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string | React.ReactNode;
  timestamp: Date;
}

const SUGGESTIONS = [
  "What are your key strengths?",
  "Tell me about your projects.",
  "Where are you based?",
  "How can I contact you?",
];

function getMockResponse(query: string): string | React.ReactNode {
  const q = query.toLowerCase();

  if (q.includes("strength") || q.includes("specialize") || q.includes("skills") || q.includes("tech") || q.includes("stack")) {
    const fe = portfolioData.skills.frontend.map(s => s.name).slice(0, 3).join(", ");
    const be = portfolioData.skills.backend.map(s => s.name).slice(0, 3).join(", ");
    return `NF RIDOY specializes in Full-Stack Web Development, specifically the MERN Stack and Next.js. His core stack includes Frontend: ${fe}... and Backend: ${be}..., with expertise in TypeScript, GSAP, and secure APIs.`;
  }

  if (q.includes("project") || q.includes("portfolio") || q.includes("work") || q.includes("build")) {
    return `He has built several production-grade ecosystems, including: 1) ${portfolioData.projects[0].title}: ${portfolioData.projects[0].description}. 2) ${portfolioData.projects[1].title}: ${portfolioData.projects[1].description}.`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("social") || q.includes("github") || q.includes("linkedin")) {
    return (
      <>
        You can reach out to Md Noman Faysal Ridoy directly via email at{" "}
        <a href={`mailto:${portfolioData.personalInfo.socials.email}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300">{portfolioData.personalInfo.socials.email}</a>, or visit his{" "}
        <a href={portfolioData.personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300">LinkedIn</a> and{" "}
        <a href={portfolioData.personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300">GitHub</a>.
      </>
    );
  }

  if (q.includes("location") || q.includes("where") || q.includes("base") || q.includes("live") || q.includes("bangladesh")) {
    return `Md Noman Faysal Ridoy is currently based in Dhaka, Bangladesh, and is open to local, hybrid, and remote opportunities worldwide.`;
  }

  if (q.includes("experience") || q.includes("years") || q.includes("how long")) {
    return `He has over 2 years of professional development experience specializing in MERN stack, Next.js, API security (JWT, NextAuth), and high-performance frontend animations using GSAP and Framer Motion.`;
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("start")) {
    return `Hello! I am the AI Assistant of Md Noman Faysal Ridoy. Ask me anything about his technical stack, projects, experience, or contact details!`;
  }

  return `${portfolioData.personalInfo.bio} ${portfolioData.personalInfo.tagline} If you have specific questions about his work or availability, feel free to ask or drop an email at ${portfolioData.personalInfo.socials.email}.`;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hi! I'm NF RIDOY's virtual assistant. Ask me anything about his skills, projects, or how to hire him!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const openChat = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    window.addEventListener("open-ai-chat", openChat);
    return () => window.removeEventListener("open-ai-chat", openChat);
  }, [openChat]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = getMockResponse(textToSend);
      const aiMsg: Message = {
        id: Math.random().toString(),
        sender: "ai",
        text: aiResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-zinc-800 bg-zinc-950/95 backdrop-blur-xl flex flex-col max-h-[520px]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-950/90 shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-200">NF RIDOY Assistant</p>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
            {messages.map((msg) => {
              const isAi = msg.sender === "ai";
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 max-w-[88%] ${isAi ? "self-start" : "self-end flex-row-reverse"}`}
                >
                  <div
                    className={`h-7 w-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                      isAi
                        ? "bg-zinc-900 border border-zinc-800 text-emerald-400"
                        : "bg-emerald-500 text-zinc-950"
                    }`}
                  >
                    {isAi ? <Sparkles className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                  </div>
                  <div
                    className={`px-3 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                      isAi
                        ? "bg-zinc-900/50 border border-zinc-800 text-zinc-300"
                        : "bg-gradient-to-tr from-emerald-600/90 to-teal-600/90 text-white"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[8px] font-mono text-white mt-1.5 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex gap-2.5 self-start max-w-[88%]">
                <div className="h-7 w-7 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <Sparkles className="h-3.5 w-3.5 animate-spin" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-500 text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="px-4 pb-3 flex flex-wrap gap-1.5 shrink-0">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-zinc-800 bg-zinc-950/80 p-3 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask me about NF RIDOY..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                className="flex-1 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-emerald-500/50 focus:outline-none text-zinc-100 text-sm rounded-xl px-3 py-2.5 transition-colors placeholder:text-zinc-600"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:hover:bg-emerald-500 text-zinc-950 rounded-xl h-10 w-10 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.3)] shrink-0 transition-transform duration-200 active:scale-95"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-zinc-950 flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label={isOpen ? "Close chat" : "Open AI chat"}
      >
        {/* Animated ring */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-400/60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
        <span className="absolute -inset-1 rounded-full border border-emerald-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" style={{ animationDelay: "0.5s" }} />

        <div className="relative z-10">
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </div>
      </button>
    </>
  );
}
