import React from 'react';
import { ArrowDown, Utensils, CalendarDays, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Welcome to The Old Gallery"
      className="relative min-h-[92vh] sm:min-h-screen py-20 sm:py-28 md:py-32 flex items-center justify-center overflow-hidden bg-deep-navy"
    >
      {/* Full-Width Restaurant Hero Background with Fallback Color, Responsive Picture, Cover Sizing, and Subtle Overlay */}
      <div
        className="absolute inset-0 z-0 overflow-hidden bg-deep-navy pointer-events-none"
        style={{ backgroundColor: '#17172B' }}
        role="img"
        aria-label="The Old Gallery Restro Cafe Dining Room Ambiance"
      >
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/restaurant-hero-mobile.webp" type="image/webp" />
          <source media="(min-width: 769px)" srcSet="/images/restaurant-hero.webp" type="image/webp" />
          <img
            src="/images/restaurant-hero.jpg"
            alt="The Old Gallery Restro Cafe Dining Room Ambiance"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[center_40%]"
          />
        </picture>
        {/* Subtle Dark Overlay - Keeps restaurant interior clearly visible while ensuring high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/75 via-deep-navy/50 to-deep-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/60 via-transparent to-deep-navy/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,92,0.08)_0%,transparent_75%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 text-center flex flex-col items-center w-full max-w-full">
        
        {/* Circular Logo Medallion Complementing Hero */}
        <div className="mb-5 sm:mb-6 relative group">
          <div className="relative flex items-center justify-center">
            <picture>
              <source srcSet="/images/the-old-gallery-logo-mobile.webp" type="image/webp" />
              <img
                src={siteConfig.logoUrl}
                alt="The Old Gallery Restro Cafe Circular Insignia"
                width={112}
                height={112}
                className="h-20 sm:h-28 w-auto object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.85)] transform group-hover:scale-105 transition-transform duration-500"
              />
            </picture>
          </div>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-deep-navy border border-gold/50 shadow-md text-[8px] sm:text-[9px] uppercase tracking-widest text-gold-bright font-mono whitespace-nowrap">
            Est. Malda
          </div>
        </div>

        {/* Location & Heritage Pill */}
        <div className="inline-flex max-w-full items-center justify-center gap-1.5 sm:gap-3 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-navy-surface/90 border border-gold/40 text-gold-light text-[9px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.28em] mb-4 sm:mb-5 backdrop-blur-md shadow-xl text-center">
          <MapPin className="w-3 h-3 text-gold shrink-0" />
          <span className="shrink-0">{siteConfig.city}, {siteConfig.state}</span>
          <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
          <span className="text-cream/90 font-mono truncate">Restro Cafe</span>
          <span className="text-cream/90 font-mono hidden sm:inline">& Heritage Dining</span>
        </div>

        {/* Antique Gold Filigree Accent */}
        <div className="flex items-center justify-center gap-3 w-44 sm:w-56 mb-4 opacity-80">
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-gold flex-1" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-light" />
          <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-light" />
          <div className="h-px bg-gradient-to-l from-transparent via-gold to-gold flex-1" />
        </div>

        {/* Main Display Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-cream-pure leading-[1.1] sm:leading-[1.06] mb-4 sm:mb-5 max-w-4xl drop-shadow-md px-1">
          An Experience <br />
          <span className="italic font-light gold-gradient-text tracking-normal">
            Beyond Dining
          </span>
        </h1>

        {/* Refined Subtitle */}
        <p className="font-sans text-xs sm:text-base md:text-lg text-cream-muted font-normal max-w-2xl leading-relaxed mb-7 sm:mb-9 text-balance font-light px-2">
          Discover memorable flavours, warm hospitality and beautiful moments at The Old Gallery Restro Cafe, 
          where authentic culinary traditions meet timeless colonial elegance.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto max-w-xs sm:max-w-none">
          <button
            onClick={() => scrollTo('#menu')}
            className="w-full sm:w-auto btn-luxury-gold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs tracking-widest flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
          >
            <Utensils className="w-4 h-4 text-navy-dark shrink-0" />
            <span>Explore The Menu</span>
          </button>

          <button
            onClick={() => scrollTo('#reservation')}
            className="w-full sm:w-auto btn-luxury-outline px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs tracking-widest flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <CalendarDays className="w-4 h-4 text-gold-light shrink-0" />
            <span>Reserve A Table</span>
          </button>
        </div>

        {/* Curated Heritage Badges */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-gold/20 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 text-left max-w-4xl w-full">
          <div className="p-2.5 sm:p-3.5 rounded-xl bg-navy-surface/60 border border-gold/20 backdrop-blur-sm">
            <span className="font-serif text-sm sm:text-base md:text-lg text-gold-light block font-medium">Slow-Braised</span>
            <span className="text-[10px] sm:text-[11px] text-cream/70 mt-0.5 block leading-tight">Traditional Kosha Gravies</span>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-xl bg-navy-surface/60 border border-gold/20 backdrop-blur-sm">
            <span className="font-serif text-sm sm:text-base md:text-lg text-gold-light block font-medium">Clay Tandoor</span>
            <span className="text-[10px] sm:text-[11px] text-cream/70 mt-0.5 block leading-tight">Charcoal-Smoked Grills</span>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-xl bg-navy-surface/60 border border-gold/20 backdrop-blur-sm">
            <span className="font-serif text-sm sm:text-base md:text-lg text-gold-light block font-medium">Awadhi Dum</span>
            <span className="text-[10px] sm:text-[11px] text-cream/70 mt-0.5 block leading-tight">Sealed Biryani Handis</span>
          </div>
          <div className="p-2.5 sm:p-3.5 rounded-xl bg-navy-surface/60 border border-gold/20 backdrop-blur-sm">
            <span className="font-serif text-sm sm:text-base md:text-lg text-gold-light block font-medium">Restro Cafe</span>
            <span className="text-[10px] sm:text-[11px] text-cream/70 mt-0.5 block leading-tight">Artisanal Teas & Sweets</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 sm:mt-12">
          <button
            onClick={() => scrollTo('#about')}
            aria-label="Scroll down to explore The Old Gallery"
            className="group p-2 text-gold-light/70 hover:text-gold transition-colors animate-bounce cursor-pointer"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] block mb-1 text-gold/60 group-hover:text-gold font-mono">
              Scroll
            </span>
            <ArrowDown className="w-4 h-4 mx-auto" />
          </button>
        </div>

      </div>
    </section>
  );
};
