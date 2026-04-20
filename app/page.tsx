import TerminalHero from "@/components/TerminalHero";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <TerminalHero />
      
      <div className="w-full space-y-20 py-20 px-4">
        <SkillsGrid />
        
        <div className="flex flex-col items-center">
          <ExperienceTimeline />
        </div>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5 flex flex-col items-center gap-4 text-white/20 font-mono text-sm">
          <p>© 2026 // CLAY_SYSTEMS // NASSIM MAHMOUDI</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-terminal-blue transition-colors">GITHUB</a>
            <a href="#" className="hover:text-terminal-blue transition-colors">LINKEDIN</a>
            <a href="mailto:nassimmahmoudi38@gmail.com" className="hover:text-terminal-blue transition-colors">MAIL</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
