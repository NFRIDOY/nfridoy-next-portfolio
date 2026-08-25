"use client";

import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { MessageSquare, Send, Sparkles, User, Cpu } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  "What are your key strengths?",
  "Tell me about your projects.",
  "Where are you based?",
  "How can I contact you?",
];

// Helper client-side response matching engine
function getMockResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("strength") || q.includes("specialize") || q.includes("skills") || q.includes("tech") || q.includes("stack")) {
    const fe = portfolioData.skills.frontend.map(s => s.name).slice(0, 3).join(", ");
    const be = portfolioData.skills.backend.map(s => s.name).slice(0, 3).join(", ");
    return `NF RIDOY specializes in Full-Stack Web Development, specifically the MERN Stack and Next.js. His core stack includes Frontend: ${fe}... and Backend: ${be}..., with expertise in TypeScript, GSAP, and secure APIs.`;
  }

  if (q.includes("project") || q.includes("portfolio") || q.includes("work") || q.includes("build")) {
    const projs = portfolioData.projects.map(p => `"${p.title}" (${p.description})`).join(" and ");
    return `He has built several production-grade ecosystems, including: 1) ${portfolioData.projects[0].title}: ${portfolioData.projects[0].description}. 2) ${portfolioData.projects[1].title}: ${portfolioData.projects[1].description}.`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("social") || q.includes("github") || q.includes("linkedin")) {
    return `You can reach out to Md Noman Faysal Ridoy directly via email at ${portfolioData.personalInfo.socials.email}, or visit his LinkedIn (${portfolioData.personalInfo.socials.linkedin}) and GitHub (${portfolioData.personalInfo.socials.github}).`;
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

  // Fallback bio summary
  return `${portfolioData.personalInfo.bio} ${portfolioData.personalInfo.tagline} If you have specific questions about his work or availability, feel free to ask or drop an email at ${portfolioData.personalInfo.socials.email}.`;
}

export default function AIChat() {
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

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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

    // Simulate AI typing delay
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
    <section id="ai-chat" className="py-24 bg-black relative overflow-hidden">
      {/* Visual background rings */}
      <div className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 mb-2">Interactive AI Agent</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mb-4">
            Ask About Me
          </h2>
          <p className="text-zinc-400 max-w-lg font-light text-sm leading-relaxed">
            Have questions about my technical proficiency, design choices, or project implementations? Ask the virtual assistant for real-time insights.
          </p>
        </div>

        {/* Chat Card Box */}
        <Card className="border-zinc-800 bg-zinc-950/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl">
          <CardHeader className="border-b border-zinc-900 bg-zinc-950/90 py-4 px-6 flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-sm font-bold text-zinc-200">NF RIDOY Assistant</CardTitle>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Virtual Agent Active
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded bg-zinc-900/50">
              UI DEMO ONLY
            </span>
          </CardHeader>

          {/* Chat Logs Area */}
          <CardContent className="h-[380px] overflow-y-auto p-6 flex flex-col gap-4">
            {messages.map((msg) => {
              const isAi = msg.sender === "ai";
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${
                    isAi ? "self-start" : "self-end flex-row-reverse"
                  }`}
                >
                  {/* Message Avatar Icon */}
                  <div
                    className={`h-8 w-8 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                      isAi
                        ? "bg-zinc-900 border border-zinc-800 text-emerald-400"
                        : "bg-emerald-500 text-zinc-950"
                    }`}
                  >
                    {isAi ? <Sparkles className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>

                  {/* Message Box */}
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      isAi
                        ? "bg-zinc-900/50 border border-zinc-900 text-zinc-300"
                        : "bg-gradient-to-tr from-emerald-600/90 to-teal-600/90 text-white"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[8px] font-mono text-zinc-500 mt-2 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing Dots Simulation */}
            {isTyping && (
              <div className="flex gap-3 self-start max-w-[85%]">
                <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4 animate-spin" />
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-900 text-zinc-500 text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Quick Suggestion Pills */}
          <div className="px-6 pb-4 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all text-left"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Footer Form */}
          <CardFooter className="border-t border-zinc-900 bg-zinc-950/80 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex w-full items-center gap-2"
            >
              <Input
                type="text"
                placeholder="Ask me about NF RIDOY..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                className="flex-1 bg-zinc-900 border-zinc-850 hover:border-zinc-800 focus:border-emerald-500/50 text-zinc-100 rounded-xl py-5"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isTyping}
                className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl h-11 w-11 shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0 transition-transform duration-200 active:scale-95"
              >
                <Send className="h-4.5 w-4.5" />
              </Button>
            </form>
          </CardFooter>
        </Card>

      </div>
    </section>
  );
}
