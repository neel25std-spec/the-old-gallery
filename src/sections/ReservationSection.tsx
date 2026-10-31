import React, { useState } from 'react';
import type { ReservationFormData } from '../types';
import { siteConfig } from '../config/siteConfig';
import { 
  Calendar, 
  Clock, 
  Users, 
  User, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Copy,
  Check,
  ShieldCheck
} from 'lucide-react';

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const getLocalDateString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const TODAY_STRING = getLocalDateString();

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    date: TODAY_STRING,
    time: '19:30',
    guests: 4,
    seatingPreference: 'indoor',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [formattedPreview, setFormattedPreview] = useState('');
  const [copied, setCopied] = useState(false);

  // Indian phone validation: 10 digits, optionally prefixed by +91, 91 or 0
  const validateIndianPhone = (phoneStr: string): boolean => {
    const cleaned = phoneStr.replace(/[\s\-()]/g, '');
    const regex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    return regex.test(cleaned);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (minimum 2 characters).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide an active mobile number.';
    } else if (!validateIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date.';
    } else if (formData.date < TODAY_STRING) {
      newErrors.date = 'Reservation date must be today or a future date.';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred dining time.';
    }

    if (!formData.guests || formData.guests < 1 || formData.guests > 20) {
      newErrors.guests = 'Please specify a party size between 1 and 20 guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const seatingLabels: Record<string, string> = {
      indoor: 'Heritage Dining Salon',
      patio: 'Verandah Patio',
      'family-booth': 'Private Family Alcove',
      'no-preference': 'Any Available Table',
    };

    const messageLines = [
      `🏛️ *Table Reservation Enquiry — The Old Gallery (Concept)*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Guest Name:* ${formData.name.trim()}`,
      `📞 *Mobile:* ${formData.phone.trim()}`,
      `📅 *Date:* ${formData.date}`,
      `⏰ *Time Slot:* ${formData.time}`,
      `👥 *Party Size:* ${formData.guests} ${formData.guests === 1 ? 'Guest' : 'Guests'}`,
      `🪑 *Seating:* ${seatingLabels[formData.seatingPreference] || 'Heritage Dining Salon'}`,
      formData.specialRequests?.trim() 
        ? `📝 *Special Requests:* ${formData.specialRequests.trim()}` 
        : `📝 *Special Requests:* None specified`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Destination:* Malda, West Bengal`,
      `_Note: Sent via website redesign concept demonstration._`,
    ];

    const rawMessage = messageLines.join('\n');
    setFormattedPreview(rawMessage);

    const encodedMessage = encodeURIComponent(rawMessage);
    const generatedUrl = `https://wa.me/${siteConfig.whatsAppNumber}?text=${encodedMessage}`;

    setWhatsAppUrl(generatedUrl);
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(generatedUrl, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = () => {
    if (formattedPreview) {
      navigator.clipboard.writeText(formattedPreview);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="reservation"
      aria-label="Table Reservation Enquiry"
      className="py-24 sm:py-36 bg-deep-navy relative overflow-hidden border-t border-gold/20"
    >
      {/* Decorative background light pools */}
      <div className="absolute top-0 right-1/4 w-full max-w-[500px] h-[500px] bg-primary-navy/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-full max-w-sm h-96 bg-antique-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-antique-gold font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span>Concierge Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-pure font-normal tracking-tight mb-4">
            Reserve Your <span className="italic gold-gradient-text">Table</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mb-5" />
          <p className="text-cream-muted text-sm sm:text-base leading-relaxed font-light">
            Whether an intimate anniversary dinner, a corporate luncheon, or a lavish family banquet, 
            allow our concierge to prepare a gracious setting for you in Malda.
          </p>
        </div>

        {/* Main Grid: Form + Experience Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Form Card in Navy Surface */}
          <div className="lg:col-span-7 bg-navy-surface/90 backdrop-blur-xl rounded-2xl p-6 sm:p-9 border border-gold/30 shadow-[0_20px_50px_rgba(14,13,27,0.8)]">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="res-name" className="block text-xs font-medium uppercase tracking-wider text-cream/90 mb-2 flex items-center gap-1.5 font-mono">
                    <User className="w-3.5 h-3.5 text-antique-gold" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sourav Mukherjee"
                    className={`w-full px-4 py-3 bg-deep-navy/95 border rounded-xl text-cream-pure placeholder-cream/35 text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-gold/30 focus:border-antique-gold'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-xs mt-1.5 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="res-phone" className="block text-xs font-medium uppercase tracking-wider text-cream/90 mb-2 flex items-center gap-1.5 font-mono">
                    <Phone className="w-3.5 h-3.5 text-antique-gold" />
                    <span>Mobile Number *</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-antique-gold font-mono">
                      +91
                    </span>
                    <input
                      id="res-phone"
                      type="tel"
                      inputMode="numeric"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98765 43210"
                      className={`w-full pl-12 pr-4 py-3 bg-deep-navy/95 border rounded-xl text-cream-pure placeholder-cream/35 text-sm focus:outline-none transition-colors font-mono ${
                        errors.phone ? 'border-rose-500 focus:border-rose-400' : 'border-gold/30 focus:border-antique-gold'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-rose-400 text-xs mt-1.5 font-mono">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Date, Time Grouping, and Party Size */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="res-date" className="block text-xs font-medium uppercase tracking-wider text-cream/90 mb-2 flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-antique-gold" />
                    <span>Date *</span>
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    min={TODAY_STRING}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-3.5 py-3 bg-deep-navy/95 border rounded-xl text-cream text-sm focus:outline-none transition-colors ${
                      errors.date ? 'border-rose-500 focus:border-rose-400' : 'border-gold/30 focus:border-antique-gold'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-rose-400 text-xs mt-1.5 font-mono">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="res-time" className="block text-xs font-medium uppercase tracking-wider text-cream/90 mb-2 flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-antique-gold" />
                    <span>Time Slot *</span>
                  </label>
                  <select
                    id="res-time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-3 bg-deep-navy/95 border border-gold/30 rounded-xl text-cream text-sm focus:outline-none focus:border-antique-gold transition-colors font-mono"
                  >
                    <optgroup label="Lunch & Afternoon (11:00 AM – 04:00 PM)">
                      <option value="11:00">11:00 AM (Opening Slot)</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM (Luncheon)</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="14:30">02:30 PM</option>
                      <option value="15:00">03:00 PM</option>
                    </optgroup>
                    <optgroup label="Evening & Dinner (05:00 PM – 10:30 PM)">
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="19:30">07:30 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="20:30">08:30 PM</option>
                      <option value="21:00">09:00 PM</option>
                      <option value="21:30">09:30 PM</option>
                      <option value="22:00">10:00 PM (Last Seating)</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="res-guests" className="block text-xs font-medium uppercase tracking-wider text-cream/90 mb-2 flex items-center gap-1.5 font-mono">
                    <Users className="w-3.5 h-3.5 text-antique-gold" />
                    <span>Guests *</span>
                  </label>
                  <select
                    id="res-guests"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) })}
                    className="w-full px-3.5 py-3 bg-deep-navy/95 border border-gold/30 rounded-xl text-cream text-sm focus:outline-none focus:border-antique-gold transition-colors font-mono"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Seating Preference Selector */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-cream/90 mb-2 font-mono">
                  Seating Ambiance Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'indoor', label: 'Vintage Salon', icon: '🏛️' },
                    { id: 'patio', label: 'Verandah Patio', icon: '🌿' },
                    { id: 'family-booth', label: 'Private Alcove', icon: '🕯️' },
                    { id: 'no-preference', label: 'Any Table', icon: '✨' },
                  ].map((seat) => (
                    <button
                      type="button"
                      key={seat.id}
                      onClick={() => setFormData({ ...formData, seatingPreference: seat.id as any })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                        formData.seatingPreference === seat.id
                          ? 'bg-primary-navy text-gold-bright border-antique-gold shadow-md font-semibold'
                          : 'bg-deep-navy/80 text-cream/70 border-gold/20 hover:border-gold/40'
                      }`}
                    >
                      <span className="text-sm">{seat.icon}</span>
                      <span>{seat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Special Request */}
              <div>
                <label htmlFor="res-requests" className="block text-xs font-medium uppercase tracking-wider text-cream/90 mb-2 flex items-center gap-1.5 font-mono">
                  <MessageSquare className="w-3.5 h-3.5 text-antique-gold" />
                  <span>Celebration / Dietary Notes (Optional)</span>
                </label>
                <textarea
                  id="res-requests"
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Anniversary cake arrangement, Jain / pure vegetarian seating, quiet corner, baby chair..."
                  className="w-full px-4 py-3 bg-deep-navy/95 border border-gold/30 rounded-xl text-cream-pure placeholder-cream/35 text-sm focus:outline-none focus:border-antique-gold transition-colors resize-none font-light"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-luxury-gold w-full py-4 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold shadow-2xl cursor-pointer"
                >
                  <Send className="w-4 h-4 text-navy-dark" />
                  <span>Generate WhatsApp Reservation Enquiry</span>
                </button>
              </div>

              {/* Guarantee & Privacy Notice */}
              <div className="p-4 rounded-xl bg-deep-navy/95 border border-gold/25 text-xs text-cream/75 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-antique-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed font-light">
                  <strong className="text-gold-light font-medium">Concept Guarantee:</strong> This pre-formats your reservation details into our concept WhatsApp concierge. 
                  No personal data is collected or stored on our servers. This is an enquiry, not an automated booking.
                </p>
              </div>
            </form>

            {/* Generated WhatsApp Message Preview & Instant Link */}
            {isSubmitted && whatsAppUrl && (
              <div className="mt-6 p-6 rounded-2xl bg-primary-navy/40 border border-gold/40 text-cream space-y-4 animate-in fade-in duration-300 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WhatsApp Enquiry Ready</span>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-gold-light hover:text-cream bg-deep-navy px-2.5 py-1 rounded border border-gold/30 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy Text'}</span>
                  </button>
                </div>

                {/* Pre-formatted message box */}
                <div className="p-3.5 rounded-xl bg-deep-navy border border-gold/20 font-mono text-[11px] text-cream/80 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                  {formattedPreview}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-gold w-full sm:w-auto px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold cursor-pointer"
                  >
                    <span>Open In WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 text-navy-dark" />
                  </a>
                  <span className="text-[11px] text-cream/60">
                    Concierge Number: {siteConfig.phone}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Side Info & Etiquette Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dining Etiquette */}
            <div className="vintage-card p-6 sm:p-8 rounded-2xl shadow-xl bg-navy-surface">
              <h3 className="font-serif text-xl sm:text-2xl text-cream-pure font-normal mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-bright" />
                <span>Dining Notes & Etiquette</span>
              </h3>
              
              <ul className="space-y-4 text-xs text-cream-muted leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-antique-gold shrink-0 mt-1.5" />
                  <span>
                    <strong className="text-cream-pure font-normal">Table Holding Window:</strong> Reserved tables are held for 15 minutes past the booking time before being released to walk-in patrons.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-antique-gold shrink-0 mt-1.5" />
                  <span>
                    <strong className="text-cream-pure font-normal">Private Dining & Banquets:</strong> For celebrations exceeding 10 guests, custom multi-course thali menus can be pre-arranged with the head chef.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-antique-gold shrink-0 mt-1.5" />
                  <span>
                    <strong className="text-cream-pure font-normal">Dietary Purity:</strong> Dedicated kitchen stations, clay pots, and oil reserves are strictly designated for pure vegetarian and Jain guests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-antique-gold shrink-0 mt-1.5" />
                  <span>
                    <strong className="text-cream-pure font-normal">Arrival & Parking:</strong> Convenient parking available near Kanir More, Sarbamangala Pally.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Telephone Concierge Card */}
            <div className="p-6 rounded-2xl bg-navy-surface border border-gold/25 space-y-3 shadow-xl">
              <h4 className="font-serif text-base text-gold-light font-medium">Prefer Immediate Telephone Assistance?</h4>
              <p className="text-xs text-cream/70 leading-relaxed font-light">
                For prompt same-day table enquiries during operational hours (11:00 AM – 11:00 PM):
              </p>
              <div className="pt-2 flex flex-col gap-2 text-xs">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2.5 text-cream-pure font-mono hover:text-gold-light transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-antique-gold" />
                  <span>{siteConfig.phone}</span>
                </a>
                <span className="text-[10px] text-gold-light italic font-mono">
                  *Official restaurant direct line
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
