import React, { useEffect, useState, useCallback } from 'react';
import type { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Loader2, Sparkles } from 'lucide-react';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation: Escape to close, Left Arrow, Right Arrow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Artisan gallery preview: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl select-none animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div 
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/90 via-black/50 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-bright" />
            <span className="font-serif text-gold-light text-base sm:text-lg font-medium tracking-wide">
              The Old Gallery Archives
            </span>
          </div>
          <span className="text-xs text-cream/40">•</span>
          <span className="text-[10px] uppercase tracking-widest text-antique-gold bg-navy-surface/90 border border-gold/30 px-3 py-0.5 rounded-full font-mono">
            {currentItem.category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs tracking-widest text-cream/70 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            aria-label="Close image lightbox"
            className="p-2 rounded-full bg-navy-surface/90 text-cream hover:text-gold-bright hover:bg-navy-dark border border-gold/30 transition-colors cursor-pointer shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Frame with Gold Border Inset */}
      <div
        className="relative max-w-5xl max-h-[74vh] w-full mx-4 flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading Spinner */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center text-antique-gold">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        )}

        {/* Error Fallback */}
        {hasError ? (
          <div className="bg-navy-surface p-8 rounded-2xl border border-gold/30 text-center max-w-sm shadow-2xl">
            <ImageIcon className="w-12 h-12 text-antique-gold mx-auto mb-3" />
            <p className="text-sm text-cream-pure font-serif">Image Unavailable</p>
            <p className="text-xs text-cream/60 mt-1 font-light">Please check your connection or navigate to the next photograph.</p>
          </div>
        ) : (
          <div className="relative group/img">
            <img
              key={currentItem.id}
              src={currentItem.image}
              alt={currentItem.alt}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              className={`max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-gold/30 transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        )}

        {/* Navigation Arrows with Gold Hover Glow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous image (Left Arrow)"
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-navy-dark/90 hover:bg-navy-surface text-cream hover:text-gold-bright border border-gold/40 transition-all shadow-2xl cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next image (Right Arrow)"
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-navy-dark/90 hover:bg-navy-surface text-cream hover:text-gold-bright border border-gold/40 transition-all shadow-2xl cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div
        className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-center z-20 pointer-events-none"
      >
        <div className="max-w-2xl mx-auto pointer-events-auto">
          <h4 className="font-serif text-lg sm:text-2xl text-cream-pure font-normal">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-cream-muted mt-1 leading-relaxed font-light">
            {currentItem.description}
          </p>
          <div className="flex items-center justify-center gap-3 text-[10px] text-cream/50 uppercase tracking-widest mt-2 font-mono">
            <span>Use <kbd className="px-1.5 py-0.5 rounded bg-navy-surface border border-gold/30 text-gold-light">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-navy-surface border border-gold/30 text-gold-light">→</kbd> keys</span>
            <span>•</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-navy-surface border border-gold/30 text-gold-light">Esc</kbd> to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
