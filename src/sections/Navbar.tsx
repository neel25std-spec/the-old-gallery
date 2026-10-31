import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, CalendarClock, Phone, Compass } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [headerBottom, setHeaderBottom] = useState(60);
  const headerRef = useRef<HTMLElement>(null);

  // Measure navbar's exact viewport position to cleanly align the mobile menu drawer
  const updateHeaderPosition = () => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      const height = Math.round(rect.height) || 56;
      // When sticky to top or below banner, ensure drawer aligns directly beneath header
      const bottom = Math.max(Math.round(rect.bottom), height);
      setHeaderBottom(bottom);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      updateHeaderPosition();

      // Section tracking for nav underline indicator
      const sections = ['hero', 'about', 'signature', 'menu', 'gallery', 'reservation', 'location'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body & html scroll when mobile menu is active, and update header bottom
  useEffect(() => {
    if (isOpen) {
      updateHeaderPosition();
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    }
  }, [isOpen]);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
      updateHeaderPosition();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Signatures', href: '#signature', id: 'signature' },
    { name: 'The Menu', href: '#menu', id: 'menu' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#location', id: 'location' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const toggleMenu = () => {
    updateHeaderPosition();
    setIsOpen((prev) => !prev);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-dark/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(14,13,27,0.85)] border-b border-gold/30 py-2 sm:py-3' 
            : 'bg-navy/90 backdrop-blur-md border-b border-gold/20 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo & Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="group flex items-center gap-2 sm:gap-3.5 focus:outline-none min-w-0 shrink"
              aria-label="The Old Gallery - Home"
            >
              {/* Actual Supplied Logo - Unaltered, Original Image Directly */}
              <div className="relative shrink-0 flex items-center justify-center">
                <picture>
                  <source srcSet="/images/the-old-gallery-logo-mobile.webp" type="image/webp" />
                  <img
                    src={siteConfig.logoUrl}
                    alt="The Old Gallery Logo"
                    width={48}
                    height={48}
                    className="h-9 sm:h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
                  />
                </picture>
              </div>

              <div className="flex flex-col items-start min-w-0">
                <span className="font-serif text-sm xs:text-base sm:text-xl md:text-2xl font-bold tracking-[0.12em] sm:tracking-[0.18em] text-cream-pure group-hover:text-gold-light transition-colors uppercase leading-none truncate max-w-[170px] xs:max-w-[220px] sm:max-w-none">
                  The Old Gallery
                </span>
                <span className="font-sans text-[7.5px] xs:text-[8.5px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.28em] text-gold uppercase mt-0.5 sm:mt-1 group-hover:text-cream transition-colors font-medium truncate max-w-[170px] xs:max-w-[220px] sm:max-w-none">
                  Restro Cafe • Malda
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative px-3.5 py-2 text-xs uppercase tracking-[0.2em] transition-all font-medium rounded-md cursor-pointer ${
                      isActive 
                        ? 'text-gold-light font-semibold' 
                        : 'text-cream/80 hover:text-gold-light hover:bg-navy-surface/50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent animate-in fade-in duration-300" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Reservation CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#reservation"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#reservation');
                }}
                className="btn-luxury-gold px-5 py-2.5 rounded-full text-[11px] flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <CalendarClock className="w-3.5 h-3.5 text-navy-dark" />
                <span>Reserve a Table</span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center gap-1.5 xs:gap-2 shrink-0">
              <a
                href="#reservation"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#reservation');
                }}
                className="btn-luxury-gold px-2.5 py-1 xs:px-3 xs:py-1.5 rounded-full text-[9px] xs:text-[10px] font-bold tracking-wider shrink-0 shadow-md"
              >
                Reserve
              </a>

              <button
                onClick={toggleMenu}
                type="button"
                className="p-1.5 xs:p-2 rounded-lg xs:rounded-xl text-cream hover:text-gold hover:bg-navy-surface focus:outline-none focus:ring-1 focus:ring-gold transition-colors shrink-0 cursor-pointer"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
              >
                {isOpen ? <X className="w-5 h-5 text-gold-light" /> : <Menu className="w-5 h-5 text-cream" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Render Mobile Navigation Drawer via Portal directly into document.body */}
      {/* This guarantees the drawer fixes to the viewport and completely avoids containing-block bugs */}
      {typeof document !== 'undefined' && isOpen && createPortal(
        <div
          id="mobile-menu-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-x-0 bottom-0 z-40 bg-navy-dark/98 backdrop-blur-2xl border-t border-gold/30 sm:hidden flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ top: `${headerBottom}px` }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div id="mobile-menu" className="w-full max-w-lg mx-auto px-5 py-6 flex flex-col justify-between min-h-full">
            <div className="space-y-4">
              {/* Section Header with refined vintage divider */}
              <div className="flex items-center justify-between pb-3 border-b border-gold/25">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-antique-gold font-semibold">
                  <Compass className="w-3.5 h-3.5 text-gold-bright" />
                  <span>Navigation Menu</span>
                </div>
                <span className="text-[10px] font-mono text-gold-light/70 tracking-wider">
                  Restro Cafe • Malda
                </span>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1" aria-label="Mobile Menu Navigation">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-navy-surface text-gold-bright border border-gold/30'
                          : 'text-cream-light hover:text-gold-light hover:bg-navy-surface/80 active:bg-navy-surface'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="font-mono text-xs text-gold/70">0{idx + 1}</span>
                        <span className="font-serif text-lg tracking-wide group-hover:translate-x-1 transition-transform">
                          {link.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-gold/60 uppercase tracking-widest group-hover:text-gold-light transition-colors">
                        Explore →
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* Direct Table Reservation Button */}
              <div className="pt-2">
                <a
                  href="#reservation"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#reservation');
                  }}
                  className="btn-luxury-gold w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold shadow-xl cursor-pointer"
                >
                  <CalendarClock className="w-4 h-4 text-navy-dark" />
                  <span>Reserve a Table</span>
                </a>
              </div>
            </div>

            {/* Bottom Quick Contact & Operating Hours */}
            <div className="pt-6 mt-6 border-t border-gold/20 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-navy-surface border border-gold/25 text-cream-light hover:border-gold active:bg-navy-dark transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-[11px] font-medium">Call Concierge</span>
                </a>

                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-navy-surface border border-gold/25 text-cream-light hover:border-gold active:bg-navy-dark transition-colors"
                >
                  <Compass className="w-4 h-4 text-gold" />
                  <span className="text-[11px] font-medium">Get Directions</span>
                </a>
              </div>

              {/* Official Hours and Clickable Address */}
              <div className="text-center space-y-1 pt-1">
                <p className="text-[11px] text-antique-gold font-mono">
                  Open Every Day: {siteConfig.openingHours.everyday}
                </p>
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[10px] text-cream/70 hover:text-gold-light tracking-wide transition-colors"
                  title="Open address in Google Maps"
                >
                  {siteConfig.fullAddress}
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
