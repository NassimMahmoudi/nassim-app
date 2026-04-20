"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function TerminalHero() {
  const [text, setText] = useState("");
  const fullText = "whoami --professional";
  const bio = [
    "> Loading Clay_Persona.sh...",
    "> [SUCCESS] High-Level Engineer found.",
    "> Location: Erfurt, Germany",
    "> Main_Focus: JS, React, Software Architecture.",
    "> Status: Available for High-Impact Projects.",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-4xl px-4 py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full terminal-glass rounded-lg overflow-hidden glow-border"
      >
        {/* Terminal Header */}
        <div className="bg-white/10 px-4 py-2 flex items-center gap-2 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 text-center text-xs text-white/40 font-mono flex items-center justify-center gap-2">
            <Terminal size={12} /> clay — bash — 80x24
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base space-y-2">
          <div className="flex gap-2">
            <span className="text-terminal-green">clay@portfolio</span>
            <span className="text-white/40">:</span>
            <span className="text-terminal-blue">~</span>
            <span className="text-white">$</span>
            <span className="text-white">{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-5 bg-white/80 translate-y-1"
            />
          </div>

          <div className="pt-4 space-y-1">
            {bio.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + idx * 0.4 }}
                className={line.includes("[SUCCESS]") ? "text-terminal-green/80" : "text-white/60"}
              >
                {line}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="pt-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold glow-text bg-gradient-to-r from-terminal-blue to-terminal-green bg-clip-text text-transparent">
              Nassim Mahmoudi
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mt-2">
              Full Stack Software Engineer
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
