"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  Globe, 
  Layout, 
  Server,
  MessageSquare,
  Cpu,
  Zap,
  BookOpen
} from "lucide-react";

const skillCategories = [
  {
    title: "Communication",
    icon: <MessageSquare className="text-pink-400" />,
    skills: ["Team Leadership", "Technical Writing", "Public Speaking", "Agile Collaboration"],
  },
  {
    title: "AI & Modern Backend",
    icon: <Cpu className="text-terminal-green" />,
    skills: ["Python", "FastAPI", "Haystack", "MCP", "Spring Boot", "Java"],
  },
  {
    title: "Frontend & Docs",
    icon: <Layout className="text-terminal-blue" />,
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Docusaurus", "Vue.js"],
  },
  {
    title: "Data Systems",
    icon: <Database className="text-amber-400" />,
    skills: ["PostgreSQL", "Liquibase", "MySQL", "MongoDB", "Redis", "Apache Kafka"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Globe className="text-purple-400" />,
    skills: ["AWS", "Azure", "Docker", "CI/CD", "Jenkins", "Git/GitHub"],
  },
  {
    title: "Integrations",
    icon: <Zap className="text-yellow-400" />,
    skills: ["Stripe Payment", "REST APIs", "GraphQL", "Node.js", "Express.js"],
  },
];

import { useLanguage } from "@/lib/LanguageContext";

export default function SkillsGrid() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full max-w-4xl px-4 py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold glow-text mb-4">{t.sections.skills}</h2>
        <div className="h-1 w-20 bg-terminal-blue rounded-full glow-border mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="terminal-glass p-6 rounded-xl glow-border hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="font-bold text-white/90">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded text-white/60 hover:text-terminal-blue hover:border-terminal-blue/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
