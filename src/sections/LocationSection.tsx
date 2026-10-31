import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ExternalLink, 
  Navigation, 
  AlertCircle,
  Building2,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyText = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section
      id="location"
      aria-label="Location and Operating Hours"
      className="py-24 sm:py-36 bg-deep-navy relative border-t border-gold/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-antique-gold font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-gold-bright" />
            <span>Destination & Hospitality Hours</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-pure font-normal tracking-tight mb-4">
            Finding <span className="italic gold-gradient-text">The Old Gallery</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mb-5" />
          <p className="text-cream-muted text-sm sm:text-base leading-relaxed font-light">
            Conveniently situated in English Bazar, Malda. Join us for an unhurried luncheon or an enchanting evening banquet.
          </p>
        </div>

        {/* Content Grid: Left Cards & Right Map View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Details: Address, Hours & Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="vintage-card p-6 sm:p-7 rounded-2xl shadow-xl bg-navy-surface">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-navy text-gold-bright shrink-0 mt-0.5 border border-gold/30">
                  <MapPin className="w-5 h-5 text-gold-bright" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream-pure font-normal mb-1">
                    Restaurant Address
                  </h3>
                  <a
                    href={siteConfig.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    title="Open exact address in Google Maps"
                  >
                    <p className="text-sm text-cream-light group-hover:text-gold-light transition-colors leading-relaxed font-light">
                      {siteConfig.fullAddress}
                    </p>
                  </a>
                  <p className="text-xs text-antique-gold mt-1 font-mono">
                    Landmark: {siteConfig.landmark}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-gold/15 flex items-center justify-between">
                    <a
                      href={siteConfig.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-antique-gold hover:text-gold-light hover:underline font-semibold font-mono"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Google Maps Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="vintage-card p-6 sm:p-7 rounded-2xl shadow-xl bg-navy-surface">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-navy text-gold-bright shrink-0 mt-0.5 border border-gold/30">
                  <Clock className="w-5 h-5 text-gold-bright" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg text-cream-pure font-normal">
                      Hospitality Hours
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Open Today</span>
                    </span>
                  </div>

                  <div className="mt-3.5 space-y-2.5 text-xs text-cream/90 font-light">
                    <div className="flex justify-between items-center py-2 border-b border-gold/10">
                      <span className="text-cream/80 font-mono">Every Day (Mon – Sun):</span>
                      <span className="font-mono text-gold-bright font-semibold text-sm">{siteConfig.openingHours.schedule}</span>
                    </div>
                    <div className="pt-1 text-[11px] text-cream/60 italic flex items-center justify-between">
                      <span>{siteConfig.openingHours.kitchenCloses}</span>
                      <span className="text-antique-gold font-mono text-[10px]">Lunch & Dinner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiries & Communication Card with Direct Links & Copy Micro-actions */}
            <div className="vintage-card p-6 sm:p-7 rounded-2xl shadow-xl bg-navy-surface">
              <h4 className="font-serif text-base text-cream-pure font-normal mb-3.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-antique-gold" />
                <span>Contact & Direct Inquiries</span>
              </h4>
              <div className="space-y-3 text-xs">
                {/* Phone */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-deep-navy/80 border border-gold/20">
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-2.5 hover:text-gold-light transition-colors group flex-1"
                    title="Call official restaurant phone"
                  >
                    <Phone className="w-4 h-4 text-antique-gold shrink-0 group-hover:text-gold-bright transition-colors" />
                    <span className="text-cream-light group-hover:text-gold-light font-mono text-xs font-medium">{siteConfig.phone}</span>
                  </a>
                  <button
                    onClick={() => copyText(siteConfig.phone, 'phone')}
                    className="p-1.5 rounded-lg bg-navy-surface hover:bg-gold hover:text-navy-dark text-gold-light transition-colors cursor-pointer border border-gold/30 shrink-0 ml-2"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-deep-navy/80 border border-gold/20">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 truncate mr-2 hover:text-gold-light transition-colors group flex-1"
                    title="Send official email"
                  >
                    <Mail className="w-4 h-4 text-antique-gold shrink-0 group-hover:text-gold-bright transition-colors" />
                    <span className="text-cream-light group-hover:text-gold-light font-mono text-[11px] truncate font-medium">{siteConfig.email}</span>
                  </a>
                  <button
                    onClick={() => copyText(siteConfig.email, 'email')}
                    className="p-1.5 rounded-lg bg-navy-surface hover:bg-gold hover:text-navy-dark text-gold-light transition-colors cursor-pointer border border-gold/30 shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Map Presentation Card in Navy Theme */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-navy-surface border border-gold/30 rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col">
              
              {/* Map Top Bar */}
              <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-deep-navy border-b border-gold/20 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-antique-gold min-w-0">
                  <MapPin className="w-4 h-4 text-gold-bright shrink-0" />
                  <span className="font-serif font-medium text-cream-pure truncate">
                    Malda Cartography <span className="hidden sm:inline font-mono text-antique-gold/80 text-[11px]">• 25.0116° N, 88.1362° E</span>
                  </span>
                </div>
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-antique-gold hover:text-gold-light text-xs font-semibold font-mono shrink-0 ml-auto"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Embedded Map Frame */}
              <div className="relative flex-1 min-h-[360px] w-full bg-deep-navy">
                <iframe
                  title="Approximate Malda West Bengal Location"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full border-0 filter contrast-125 saturate-50 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=88.1100%2C25.0000%2C88.1600%2C25.0400&amp;layer=mapnik&amp;marker=25.0116%2C88.1362"
                />

                {/* Map Floating Concierge Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-deep-navy/95 backdrop-blur-md p-4 rounded-xl border border-gold/40 shadow-2xl pointer-events-auto">
                  <div className="flex items-center gap-2 text-gold-light text-xs font-serif font-semibold mb-1">
                    <Building2 className="w-3.5 h-3.5 text-antique-gold" />
                    <span>The Old Gallery Restro Cafe</span>
                  </div>
                  <p className="text-[11px] text-cream/80 leading-relaxed font-light">
                    Kanir More, Sarbamangala Pally, Malda, West Bengal 732101.
                  </p>
                  <a
                    href={siteConfig.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-gold mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[10px] font-bold"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Navigate With Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Map Footer Clarification */}
              <div className="p-4 bg-deep-navy/95 border-t border-gold/20 flex items-start gap-2.5 text-xs text-cream/70">
                <AlertCircle className="w-4 h-4 text-antique-gold shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed font-light">
                  <strong>Location Note:</strong> Kanir More, Sarbamangala Pally, Malda. 
                  Click 'Navigate With Google Maps' or any address link for live turn-by-turn directions.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
