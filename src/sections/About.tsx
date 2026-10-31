import React from 'react';
import { Coffee, Flame, HeartHandshake, Compass, Quote, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About The Old Gallery Concept"
      className="py-24 sm:py-36 bg-cream text-navy-dark relative overflow-hidden"
    >
      {/* Subtle Wood Texture Accent Borders */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-wood via-antique-gold to-wood" />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-wood via-antique-gold to-wood" />

      {/* Ambient decorative watermarks */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] overflow-hidden max-w-[50vw]">
        <img
          src="/images/logo-watermark.webp"
          alt=""
          width={500}
          height={500}
          loading="lazy"
          decoding="async"
          className="w-48 sm:w-[500px] h-48 sm:h-[500px] max-w-full object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-wood font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-antique-gold" />
            <span>The Restro Cafe Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-navy-dark font-normal tracking-tight mb-5">
            A Place for <span className="italic text-wood-dark font-light">Beautiful Memories</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mb-6" />
          <p className="text-navy-surface text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Conceived as an intimate tribute to Bengal's leisurely cafe culture and historical banqueting soul, 
            The Old Gallery invites you to pause, converse, and relish handcrafted recipes steeped in warmth.
          </p>
        </div>

        {/* Magazine-Style Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Museum Frame Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image with Antique Gold Corner Frame & Wood Border */}
              <div className="gold-corner-frame relative rounded-2xl overflow-hidden border-2 border-wood/30 shadow-[0_20px_50px_rgba(37,36,61,0.2)] aspect-[4/5] bg-deep-navy">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Atmospheric candlelit dining salon at The Old Gallery"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-60" />
                
                {/* Museum Label Plate */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-deep-navy/90 backdrop-blur-md border border-antique-gold/40 flex items-center justify-between text-xs text-cream">
                  <div>
                    <span className="font-serif text-gold-bright text-sm block">The Heritage Salon</span>
                    <span className="text-[10px] text-cream-muted tracking-widest uppercase font-mono">Candlelit Dining • Malda</span>
                  </div>
                  <span className="text-[10px] text-antique-gold font-mono border-l border-gold/25 pl-3">No. 01</span>
                </div>
              </div>

              {/* Overlapping Floating Banquet Card with Wooden Trim */}
              <div className="absolute -bottom-6 -right-3 sm:-right-8 w-3/5 sm:w-1/2 rounded-xl overflow-hidden border-2 border-antique-gold/50 shadow-2xl bg-deep-navy p-2.5 hidden sm:block">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-navy-surface">
                  <img
                    src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=600&q=80"
                    alt="Gracious table hospitality and guest service"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-40" />
                </div>
                <div className="pt-2 px-1 text-left">
                  <p className="font-serif text-xs sm:text-sm text-cream font-medium">Warm Table Hospitality</p>
                  <p className="text-[9px] sm:text-[10px] text-gold-light tracking-widest uppercase font-mono">Your Happy Place</p>
                </div>
              </div>

              {/* Vintage Seal Crest */}
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full border-2 border-antique-gold/60 bg-deep-navy/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-2 shadow-2xl hidden md:flex text-cream">
                <Compass className="w-4 h-4 text-antique-gold mb-0.5" />
                <span className="text-[8px] uppercase tracking-widest text-gold-bright font-bold">Malda</span>
                <span className="text-[7px] text-cream/70 uppercase">Concept</span>
              </div>
            </div>
          </div>

          {/* Narrative Content with Drop Cap & Pull Quote */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pull Quote Callout in Cream/Wood Theme */}
            <div className="p-5 sm:p-6 rounded-2xl bg-cream-pure border-l-4 border-wood border-y border-r border-antique-gold/30 shadow-md relative">
              <Quote className="w-8 h-8 text-antique-gold/30 absolute top-3 right-3" />
              <p className="font-serif italic text-base sm:text-lg text-navy-dark leading-relaxed">
                "Dining is not merely the consumption of food; it is an unhurried ritual of shared stories, heartfelt laughter, and culinary nostalgia."
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-wood font-mono block mt-2 font-semibold">
                — The Old Gallery Restro Cafe Ethos
              </span>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-navy-surface text-sm sm:text-base leading-relaxed font-light">
              <p>
                <span className="float-left text-4xl sm:text-5xl font-serif text-wood-dark leading-none pr-3 pt-1">I</span>
                n the historical town of Malda—the storied gateway to North Bengal celebrated for ancient Gour ruins, 
                colonial archways, and lush summer mango orchards—The Old Gallery redesign envisions a welcoming sanctuary.
              </p>
              <p>
                Here, time slows down. The kitchen honours the patient art of slow-cooking: freshly pounded mustard, 
                aromatic whole spices roasted in iron kadhais, tender meats braised until falling from the bone, and 
                steaming earthenware handis sealed with dough to preserve every fleeting aroma.
              </p>
              <p>
                Every table is dressed with warm linen and vintage brass details, enveloped in the amber glow of filament lamps 
                and the comfort of your favorite cafe retreat.
              </p>
            </div>

            {/* Curated Restro Cafe Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-cream-pure border border-antique-gold/30 hover:border-antique-gold/60 transition-colors shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-navy/10 text-wood flex items-center justify-center mb-2.5">
                  <Flame className="w-4 h-4 text-wood" />
                </div>
                <h3 className="font-serif text-base text-navy-dark font-semibold mb-1">Patience & Dum</h3>
                <p className="text-[11px] text-navy-surface/80 leading-relaxed">
                  Slow-simmered in clay pots over embers to achieve layered depth and subtle nuances.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-pure border border-antique-gold/30 hover:border-antique-gold/60 transition-colors shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-navy/10 text-wood flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-4 h-4 text-wood" />
                </div>
                <h3 className="font-serif text-base text-navy-dark font-semibold mb-1">Bengal Warmth</h3>
                <p className="text-[11px] text-navy-surface/80 leading-relaxed">
                  Hospitality rooted in the timeless regional philosophy that every guest is honoured kin.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-pure border border-antique-gold/30 hover:border-antique-gold/60 transition-colors shadow-sm sm:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy/10 text-wood flex items-center justify-center shrink-0 mt-0.5">
                    <Coffee className="w-4 h-4 text-wood" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-navy-dark font-semibold mb-1">Restro Cafe Atmosphere</h3>
                    <p className="text-[11px] text-navy-surface/80 leading-relaxed">
                      Deep wooden brown accents, cozy booths, and vintage glass creating a relaxed haven away from the bustle of the town.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Disclaimer Footnote */}
            <div className="pt-1 text-[11px] text-navy/60 italic border-l-2 border-antique-gold pl-3">
              Note: Fictional concept narrative crafted to illustrate design identity, atmosphere, and culinary vision. Not an official historical record.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
