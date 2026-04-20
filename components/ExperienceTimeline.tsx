"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Software Developer",
    company: "Quasiris Search Cloud",
    location: "Erfurt, Germany",
    period: "2023 - Present",
    description: "Leading frontend development using React and Vue.js for high-performance search cloud solutions. Implementing complex REST API integrations and optimizing client-side performance.",
    tech: ["React", "Vue.js", "REST APIs", "TypeScript"],
  },
  {
    title: "Software Developer",
    company: "TELEMATIK",
    location: "Erfurt, Germany",
    period: "2021 - 2023",
    description: "Developed enterprise-grade applications using Angular and Spring Boot. Managed large-scale data migrations and implemented real-time monitoring features.",
    tech: ["Angular", "Spring Boot", "Java", "MongoDB"],
  },
  {
    title: "Junior Software Developer (Intern)",
    company: "TELEMATIK",
    location: "Erfurt, Germany",
    period: "2020 - 2021",
    description: "Assisted in building cross-platform mobile applications and web dashboards. Gained deep experience in Node.js backend development and PostgreSQL database design.",
    tech: ["Vue.js", "Node.js", "Apache Cordova", "PostgreSQL"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="w-full max-w-4xl px-4 py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold glow-text mb-4">Work Experience</h2>
        <div className="h-1 w-20 bg-terminal-green rounded-full glow-border" />
      </div>

      <div className="relative space-y-12">
        {/* Timeline Path */}
        <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

        {experiences.map((exp, idx) => (
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
            <div className="absolute left-0 sm:left-1/2 w-4 h-4 bg-background border-2 border-terminal-green rounded-full -translate-x-1/2 z-10 glow-border group-hover:scale-125 transition-transform" />

            {/* Content Card */}
            <div className="w-full sm:w-[45%] ml-8 sm:ml-0 terminal-glass p-6 rounded-xl glow-border">
              <div className="flex items-center gap-2 text-terminal-green mb-2 text-xs font-mono uppercase tracking-widest">
                <Calendar size={12} /> {exp.period}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
              <div className="flex items-center gap-4 text-white/40 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Briefcase size={14} /> {exp.company}
                </span>
                <span className="sm:hidden lg:flex items-center gap-1">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-terminal-green/10 text-terminal-green border border-terminal-green/20 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
