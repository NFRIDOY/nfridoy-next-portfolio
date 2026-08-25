"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, MapPin, Send, LinkedinIcon, GithubIcon, CheckCircle, Loader2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      if (formRef.current) {
        gsap.fromTo(
          formRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-zinc-900"
    >
      <div className="max-w-4xl w-full mx-auto text-center space-y-8">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-100">
          Get In Touch
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Have a project idea or just want to say hi? Drop me a message and I&apos;ll
          get back to you soon.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-zinc-400 font-mono text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-emerald-500" />
            <span>{portfolioData.personalInfo.socials.email}</span>
          </div>
          <a href={portfolioData.personalInfo.socials.linkedin} className="flex items-center gap-2 hover:text-zinc-200 transition-colors">
            <LinkedinIcon className="h-4 w-4 text-emerald-500" />
            <span>{portfolioData.personalInfo.socials.linkedin.split("/in/")[1]}</span>
          </a>
          <a href={portfolioData.personalInfo.socials.github} className="flex items-center gap-2 hover:text-zinc-200 transition-colors">
            <GithubIcon className="h-4 w-4 text-emerald-500" />
            <span>{portfolioData.personalInfo.socials.github.split("/")[3]}</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-emerald-500" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="col-span-1 px-4 py-3 rounded-lg bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="col-span-1 px-4 py-3 rounded-lg bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-lg bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition resize-none"
          />

          {/* Status Messages */}
          {status === "success" && (
            <div className="col-span-1 sm:col-span-2 flex items-center gap-2 text-emerald-400 text-sm font-mono justify-center">
              <CheckCircle className="h-4 w-4" />
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="col-span-1 sm:col-span-2 flex items-center gap-2 text-rose-400 text-sm font-mono justify-center">
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="col-span-1 sm:col-span-2 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-emerald-500 transition shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
