"use client";

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇹🇳' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <div className="terminal-glass p-1 rounded-full glow-border flex">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
              language === lang.code
                ? "bg-terminal-blue text-white glow-text"
                : "text-white/40 hover:text-white/80 hover:bg-white/5"
            }`}
          >
            <span className="hidden sm:inline">{lang.label}</span>
            <span>{lang.flag}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
