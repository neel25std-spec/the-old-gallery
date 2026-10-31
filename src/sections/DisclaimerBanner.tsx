import React, { useState } from 'react';
import { Sparkles, X, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const DisclaimerBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <aside 
        aria-label="Independent Design Notice" 
        className="bg-navy-dark/95 border-b border-gold/30 px-4 py-1.5 text-xs text-cream/70 flex items-center justify-between z-50 relative backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="flex items-center gap-2 font-serif text-[11px] tracking-widest uppercase text-gold-light">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>Independent Design Concept – Not the Official Website</span>
          </span>
          <button
            onClick={() => setIsDismissed(false)}
            className="text-gold-light hover:text-cream text-[10px] uppercase tracking-wider font-semibold underline underline-offset-2 transition-colors cursor-pointer"
          >
            Read Notice
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside
      role="region"
      aria-label="Independent Concept Disclaimer"
      className="bg-navy-dark/95 text-cream border-b border-gold/35 px-4 py-2 sm:px-6 relative z-50 text-xs backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-navy-surface text-gold-bright border border-gold/40 flex items-center justify-center shrink-0 shadow-sm">
            <ShieldAlert className="w-3 h-3 text-gold" />
          </div>
          <p className="text-[11px] sm:text-xs leading-snug text-cream-light font-normal">
            <strong className="font-serif font-semibold tracking-wider text-gold-bright uppercase mr-1.5">
              Portfolio Concept:
            </strong>
            {siteConfig.disclaimerText}
          </p>
        </div>

        <div className="flex items-center gap-4 self-end sm:self-auto shrink-0">
          <span className="text-[10px] tracking-widest uppercase text-gold/80 font-mono hidden md:inline">
            Malda, West Bengal
          </span>
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Minimize concept notice"
            className="p-1 text-cream/60 hover:text-gold hover:bg-navy-surface rounded-md transition-colors cursor-pointer"
            title="Minimize notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
