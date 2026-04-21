"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-4xl px-4 py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold glow-text mb-4">{t.sections.certifications}</h2>
        <div className="h-1 w-20 bg-terminal-green rounded-full glow-border mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.certData.map((cert: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="terminal-glass p-6 rounded-xl glow-border flex flex-col items-center text-center group hover:bg-white/5 transition-all"
          >
            <div className="mb-4 p-3 bg-terminal-green/10 rounded-full text-terminal-green group-hover:rotate-12 transition-transform">
              <Award size={32} />
            </div>
            <h3 className="text-sm font-mono text-white/90 leading-relaxed">
              {cert}
            </h3>
            <div className="mt-4 flex items-center gap-1 text-terminal-green text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              <CheckCircle2 size={10} /> Verified
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
