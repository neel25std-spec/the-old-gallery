import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import type { GalleryCategory } from '../types';
import { Lightbox } from '../components/Lightbox';
import { Maximize2, Camera, Sparkles } from 'lucide-react';

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Food',
  'Interior',
  'Dining Experience',
];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      aria-label="Atmospheric Image Gallery"
      className="py-24 sm:py-36 bg-deep-navy relative border-t border-gold/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-antique-gold font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-gold-bright" />
            <span>The Restro Cafe Visual Archives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-pure font-normal tracking-tight mb-4">
            The Atmospheric <span className="italic gold-gradient-text">Gallery</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mb-5" />
          <p className="text-cream-muted text-sm sm:text-base leading-relaxed font-light">
            Glimpse into our candlelit dining corners, slow-cooked royal presentations, and shared moments of celebratory dining.
          </p>

          <span className="inline-block mt-3 text-[11px] text-cream/50 italic font-mono">
            *Curated concept photography representing the envisioned ambiance and culinary craft.
          </span>
        </div>

        {/* Exhibition Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {CATEGORIES.map((cat) => {
            const count = cat === 'All' 
              ? galleryItems.length 
              : galleryItems.filter((i) => i.category === cat).length;
            const isSelected = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'btn-luxury-gold shadow-lg shadow-gold/25'
                    : 'bg-navy-surface text-cream/80 hover:text-gold-light hover:bg-navy-surface-light border border-gold/25'
                }`}
                aria-pressed={isSelected}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-navy-dark/20 text-navy-dark font-bold' : 'bg-gold/15 text-antique-gold'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with Gold Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="gold-corner-frame group relative rounded-2xl overflow-hidden cursor-pointer border border-gold/25 hover:border-gold/60 transition-all duration-500 aspect-[4/3] bg-navy-surface shadow-xl"
              tabIndex={0}
              role="button"
              aria-label={`Open photograph: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={600}
                height={450}
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
              />
              
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-deep-navy/95 text-gold-bright border border-gold/30 backdrop-blur-md font-mono">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 rounded-full bg-deep-navy/90 text-gold-bright border border-gold/30 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-serif text-base sm:text-lg font-normal text-cream-pure leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-cream-muted line-clamp-1 mt-1 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center text-xs text-cream/60 flex items-center justify-center gap-2 font-light">
          <Sparkles className="w-3.5 h-3.5 text-antique-gold" />
          <span>Click any photograph to view in high resolution with keyboard navigation.</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </section>
  );
};
