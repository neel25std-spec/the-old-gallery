import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  Compass,
  AlertTriangle
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Heritage Story', href: '#about' },
    { name: 'Signature Masterpieces', href: '#signature' },
    { name: 'Interactive Menu (22 Dishes)', href: '#menu' },
    { name: 'Visual Gallery Archives', href: '#gallery' },
    { name: 'Table Reservation Enquiry', href: '#reservation' },
    { name: 'Location & Hospitality Hours', href: '#location' },
  ];

  return (
    <footer className="bg-deep-navy text-cream relative border-t-2 border-gold/30 overflow-hidden">
      
      {/* Top Banner Disclaimer */}
      <div className="bg-primary-navy/90 border-b border-gold/25 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-4 h-4 text-gold-bright shrink-0" />
            <p className="text-xs text-cream-light font-medium tracking-wide">
              <strong>Portfolio Redesign Notice:</strong> Independent Design Concept – Not the Official Website of The Old Gallery.
            </p>
          </div>
          <span className="text-[10px] sm:text-[11px] text-cream/70 font-mono tracking-widest uppercase">
            Malda, West Bengal • Design Demonstration
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand Column with Actual Supplied Logo */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              {/* Actual Supplied Logo - Unaltered Original Image Directly */}
              <picture className="shrink-0">
                <source srcSet="/images/the-old-gallery-logo-mobile.webp" type="image/webp" />
                <img
                  src={siteConfig.logoUrl}
                  alt="The Old Gallery Logo"
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] shrink-0"
                />
              </picture>
              <div className="flex flex-col items-start">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-cream-pure uppercase">
                  The Old Gallery
                </span>
                <span className="text-[10px] font-sans tracking-[0.28em] text-antique-gold uppercase mt-1 font-semibold">
                  Restro Cafe • Malda, West Bengal
                </span>
                <span className="text-[9px] text-cream/60 italic mt-0.5">
                  Your Happy Place
                </span>
              </div>
            </div>

            <p className="text-xs text-cream-muted leading-relaxed max-w-sm font-light">
              An independent culinary redesign concept celebrating vintage colonial elegance, slow-cooked royal recipes, 
              and the legendary warmth of Bengal hospitality.
            </p>

            {/* Cultural Citation */}
            <div className="p-4 rounded-xl bg-navy-surface/60 border border-gold/20 max-w-sm">
              <p className="font-serif italic text-xs text-cream-light leading-relaxed">
                "Where hospitality is an art form, and every shared meal becomes an heirloom memory."
              </p>
              <span className="text-[9px] uppercase tracking-widest text-antique-gold font-mono block mt-1">
                — Restro Cafe Dining Ethos
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Concept Link"
                className="p-2.5 rounded-full bg-navy-surface hover:bg-gold hover:text-navy-dark text-cream/80 border border-gold/25 transition-all cursor-pointer shadow-md hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Concept Link"
                className="p-2.5 rounded-full bg-navy-surface hover:bg-gold hover:text-navy-dark text-cream/80 border border-gold/25 transition-all cursor-pointer shadow-md hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Directions Link"
                className="p-2.5 rounded-full bg-navy-surface hover:bg-gold hover:text-navy-dark text-cream/80 border border-gold/25 transition-all cursor-pointer shadow-md hover:scale-105"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-serif text-sm uppercase tracking-[0.25em] text-antique-gold font-semibold">
              Curated Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-gold-bright transition-colors inline-block py-0.5 tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitality & Hours Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-[0.25em] text-antique-gold font-semibold">
              Concierge Desk
            </h4>
            
            <div className="space-y-3 text-xs text-cream/85 font-light">
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-cream/85 hover:text-gold-light transition-colors group"
                title="Open address in Google Maps"
              >
                <MapPin className="w-4 h-4 text-antique-gold shrink-0 mt-0.5 group-hover:text-gold-bright transition-colors" />
                <span className="group-hover:underline leading-relaxed">{siteConfig.fullAddress}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2.5 text-cream/85 hover:text-gold-light transition-colors group"
                title="Call official restaurant phone"
              >
                <Phone className="w-4 h-4 text-antique-gold shrink-0 group-hover:text-gold-bright transition-colors" />
                <span className="font-mono text-xs">{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-cream/85 hover:text-gold-light transition-colors group"
                title="Send official email"
              >
                <Mail className="w-4 h-4 text-antique-gold shrink-0 group-hover:text-gold-bright transition-colors" />
                <span className="font-mono text-[11px] truncate text-cream/70 group-hover:text-gold-light">{siteConfig.email}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-gold/15">
              <span className="text-[10px] uppercase tracking-widest text-antique-gold font-mono block mb-1">
                Hospitality & Opening Hours:
              </span>
              <p className="text-xs text-cream/90 font-mono flex items-center justify-between">
                <span>Every Day:</span>
                <span className="text-gold-bright font-semibold">{siteConfig.openingHours.schedule}</span>
              </p>
              <p className="text-[11px] text-cream/60 italic mt-1">
                {siteConfig.openingHours.kitchenCloses}
              </p>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p className="font-light">
            © 2026 The Old Gallery Redesign Concept. Built for portfolio & design demonstration.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="btn-luxury-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
