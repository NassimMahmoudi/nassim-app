"use client";

import TerminalHero from "@/components/TerminalHero";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationSection from "@/components/EducationSection";
import Certifications from "@/components/Certifications";
import LanguagesSection from "@/components/LanguagesSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col items-center">
      <LanguageSwitcher />
      <TerminalHero />
      
      <div className="w-full space-y-20 py-20 px-4">
        <div className="flex flex-col items-center">
          <SkillsGrid />
        </div>
        
        <div className="flex flex-col items-center">
          <ExperienceTimeline />
        </div>

        <div className="flex flex-col items-center">
          <EducationSection />
        </div>

        <div className="flex flex-col items-center">
          <LanguagesSection />
        </div>

        <div className="flex flex-col items-center">
          <Certifications />
        </div>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5 flex flex-col items-center gap-4 text-white/80 font-mono text-sm">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="https://github.com/NassimMahmoudi" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-blue transition-colors">GITHUB</a>
            <a href="https://www.linkedin.com/in/nam-mahmoudi/" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-blue transition-colors">LINKEDIN</a>
            <a href="mailto:nassimmahmoudi38@gmail.com" className="hover:text-terminal-blue transition-colors">MAIL</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
