"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-4xl px-4 py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold glow-text mb-4">{t.sections.education}</h2>
        <div className="h-1 w-20 bg-terminal-blue rounded-full glow-border mx-auto" />
      </div>

      <div className="relative space-y-12">
        {/* Timeline Path */}
        <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

        {t.eduData.map((edu: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex flex-col sm:flex-row items-center justify-between group ${
              idx % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 sm:left-1/2 w-4 h-4 bg-background border-2 border-terminal-blue rounded-full -translate-x-1/2 z-10 glow-border group-hover:scale-125 transition-transform" />

            {/* Content Card */}
            <div className="w-full sm:w-[45%] ml-8 sm:ml-0 terminal-glass p-6 rounded-xl glow-border text-start">
              <div className="flex items-center gap-2 text-terminal-blue mb-2 text-xs font-mono uppercase tracking-widest">
                <Calendar size={12} /> {edu.period}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <div className="flex items-center gap-4 text-white/40 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <GraduationCap size={14} /> {edu.institution}
                </span>
                <span className="sm:hidden lg:flex items-center gap-1">
                  <MapPin size={14} /> {edu.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
