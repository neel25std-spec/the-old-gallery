import React from 'react';
import type { MenuItem } from '../types';
import { Flame, Sparkles, Eye } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onSelect }) => {
  return (
    <article
      className="vintage-card gold-corner-frame rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-gold/25 hover:border-gold/60 transition-all duration-400 shadow-xl bg-navy-surface"
      onClick={() => onSelect?.(item)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect?.(item);
        }
      }}
      aria-label={`View tasting dossier for ${item.name}`}
    >
      {/* Dish Imagery */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-deep-navy">
        <img
          src={item.image}
          alt={item.name}
          width={600}
          height={375}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-navy/30 to-transparent opacity-85" />

        {/* Dietary Enamel Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-deep-navy/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-gold/30 text-[9px] font-semibold tracking-wider uppercase shadow-md">
          {item.isVegetarian ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20" />
              <span className="text-emerald-300 font-mono">Pure Veg</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-rose-500 ring-2 ring-rose-500/20" />
              <span className="text-rose-300 font-mono">Non-Veg</span>
            </>
          )}
        </div>

        {/* Chef Special Badge */}
        {item.chefSpecial && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-primary-navy/90 text-gold-bright border border-gold/40 px-2.5 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-widest backdrop-blur-md font-mono">
            <Sparkles className="w-2.5 h-2.5 text-gold-bright" />
            <span>Signature</span>
          </div>
        )}

        {/* Floating Quick View Hint on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-navy-dark/90 border border-gold/50 text-gold-light text-xs font-serif flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>Chef's Dossier</span>
          </div>
        </div>

        {/* Illustrative Price Capsule */}
        <div className="absolute bottom-3 right-3 bg-deep-navy/95 border border-gold/40 text-gold-bright font-serif text-sm font-semibold px-3 py-0.5 rounded-lg backdrop-blur-md shadow-md">
          ₹{item.price}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] uppercase tracking-widest text-antique-gold font-mono">
              {item.category}
            </span>
            {item.bengaliName && (
              <span className="font-serif text-xs text-gold-light tracking-wide">
                {item.bengaliName}
              </span>
            )}
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-normal text-cream-pure group-hover:text-gold-light transition-colors leading-snug">
            {item.name}
          </h3>

          <p className="text-xs text-cream-muted line-clamp-2 mt-2 leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        {/* Bottom Tags / Details */}
        <div className="pt-3.5 mt-3.5 border-t border-gold/15 flex items-center justify-between text-[11px] text-cream/70">
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.tags?.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] font-mono bg-navy-surface-light px-2 py-0.5 rounded text-cream/80 border border-gold/15"
              >
                {tag}
              </span>
            ))}
          </div>

          {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
            <div className="flex items-center gap-1 text-amber-400 shrink-0" title={`Spice Level: ${item.spiceLevel}/3`}>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: item.spiceLevel }).map((_, i) => (
                  <Flame key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
