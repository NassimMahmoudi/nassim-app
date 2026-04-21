"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Globe2 } from "lucide-react";

export default function LanguagesSection() {
  const { t } = useLanguage();

  const languageLevels = [
    { name: t.languages.arabic, level: t.languages.native, percent: 100 },
    { name: t.languages.german, level: t.languages.intermediate, percent: 60 },
    { name: t.languages.english, level: t.languages.advanced, percent: 85 },
    { name: t.languages.french, level: t.languages.advanced, percent: 85 },
  ];

  return (
    <section className="w-full max-w-4xl px-4 py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold glow-text mb-4">{t.sections.languages}</h2>
        <div className="h-1 w-20 bg-purple-500 rounded-full glow-border mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {languageLevels.map((lang, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="terminal-glass p-6 rounded-xl glow-border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Globe2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{lang.name}</h3>
              </div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                {lang.level}
              </span>
            </div>
            
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
