import React from 'react';
import { menuItems } from '../data/menuData';
import { Sparkles, Flame, Leaf, ArrowRight } from 'lucide-react';

export const FeaturedDishes: React.FC = () => {
  const signatures = menuItems.filter((item) => item.isFeatured).slice(0, 4);

  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="signature"
      aria-label="Signature Culinary Creations"
      className="py-24 sm:py-32 bg-deep-navy relative border-y border-gold/25 overflow-hidden"
    >
      {/* Background Lighting Pools */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-96 bg-primary-navy/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-antique-gold font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
              <span>The Restro Cafe Repertoire</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-pure font-normal tracking-tight">
              Signature <span className="italic gold-gradient-text">Creations</span>
            </h2>
            <p className="text-cream-muted text-sm sm:text-base mt-2 max-w-xl font-light">
              Masterpieces celebrated for their intricate preparation, authentic regional spices, and sensory storytelling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-[10px] sm:text-[11px] text-gold-light uppercase tracking-widest bg-navy-surface px-3.5 py-1.5 rounded-full border border-gold/30 font-mono shadow-sm">
              *Sample illustrative dishes & pricing
            </span>
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-antique-gold hover:text-gold-light hover:underline font-semibold cursor-pointer py-1"
            >
              <span>Explore All 22 Dishes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {signatures.map((dish, idx) => (
            <div
              key={dish.id}
              className="vintage-card gold-corner-frame rounded-2xl overflow-hidden flex flex-col group relative shadow-2xl bg-navy-surface"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-deep-navy">
                <img
                  src={dish.image}
                  alt={dish.name}
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-navy/30 to-transparent opacity-85" />

                {/* Dietary Enamel Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-deep-navy/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-gold/40 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase shadow-md">
                  {dish.isVegetarian ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-500/30 animate-pulse" />
                      <span className="text-emerald-300 font-mono">Pure Veg</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-rose-500 ring-2 ring-rose-500/30" />
                      <span className="text-rose-300 font-mono">Non-Veg</span>
                    </>
                  )}
                </div>

                {/* Roman Numeral Accent */}
                <span className="absolute top-3 right-3 text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full bg-deep-navy/90 text-gold-light border border-gold/30">
                  #{idx + 1}
                </span>

                {/* Capsule Price Tag in Antique Gold */}
                <div className="absolute bottom-3 right-3 bg-primary-navy/95 backdrop-blur-md border border-antique-gold/60 text-gold-bright px-3.5 py-1 rounded-xl shadow-xl font-serif text-sm font-bold flex items-center gap-1">
                  <span>₹{dish.price}</span>
                </div>
              </div>

              {/* Dish Content Box */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 text-xs text-antique-gold font-medium mb-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-gold-light font-mono">
                      {dish.category}
                    </span>
                    {dish.bengaliName && (
                      <span className="font-serif text-gold-light tracking-wide text-xs">
                        {dish.bengaliName}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-cream-pure font-normal group-hover:text-gold-light transition-colors leading-snug">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-cream-muted line-clamp-3 mt-2.5 leading-relaxed font-light">
                    {dish.description}
                  </p>
                </div>

                {/* Card Meta & Spices */}
                <div className="pt-4 mt-5 border-t border-gold/20 flex items-center justify-between text-[11px] text-cream/70">
                  <div className="flex items-center gap-1 text-[10px] text-gold-light font-mono">
                    <Sparkles className="w-3 h-3 text-antique-gold" />
                    <span>Chef's Choice</span>
                  </div>

                  {dish.spiceLevel !== undefined && dish.spiceLevel > 0 && (
                    <div className="flex items-center gap-1" title={`Spice Calibration: ${dish.spiceLevel}/3`}>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-amber-300 font-mono">
                        {dish.spiceLevel === 1 ? 'Delicate' : dish.spiceLevel === 2 ? 'Aromatic' : 'Robust'}
                      </span>
                    </div>
                  )}

                  {dish.isVegetarian && (
                    <div className="flex items-center gap-1 text-emerald-400">
                      <Leaf className="w-3 h-3" />
                      <span className="text-[10px] font-mono">Plant-Based</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Invitation Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-navy-surface/80 border border-gold/30 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl text-cream-pure font-normal">
              Eager to taste our complete Restro Cafe menu?
            </h4>
            <p className="text-xs text-cream/70 mt-1 font-light">
              Explore 22 authentic preparations spanning Bengali river curries, royal Awadhi dum, and Kolkata Chinese.
            </p>
          </div>
          <button
            onClick={scrollToMenu}
            className="btn-luxury-gold shrink-0 px-6 py-3 rounded-full text-xs cursor-pointer shadow-lg"
          >
            Open Interactive Menu
          </button>
        </div>

      </div>
    </section>
  );
};
