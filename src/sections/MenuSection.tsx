import React, { useState, useMemo, useEffect } from 'react';
import { menuItems } from '../data/menuData';
import type { MenuCategory, MenuItem } from '../types';
import { MenuCard } from '../components/MenuCard';
import { siteConfig } from '../config/siteConfig';
import { 
  Search, 
  X, 
  RotateCcw, 
  UtensilsCrossed, 
  AlertCircle,
  Flame,
  SlidersHorizontal,
  Wine,
  Sparkles,
  ShieldCheck,
  Send
} from 'lucide-react';

const CATEGORIES: MenuCategory[] = [
  'All',
  'Bengali',
  'North Indian',
  'Chinese',
  'Biryani',
  'Desserts',
  'Beverages',
];

type DietaryFilter = 'all' | 'veg' | 'non-veg';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryFilter>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Filtered Items logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVegetarian) {
        return false;
      }
      if (dietaryFilter === 'non-veg' && item.isVegetarian) {
        return false;
      }

      // Search query (case-insensitive across name, description, tags, bengaliName)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesBengali = item.bengaliName?.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesBengali && !matchesTags && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Close dish modal on ESC & lock body scroll
  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setDietaryFilter('all');
  };

  const isFiltered = selectedCategory !== 'All' || searchQuery !== '' || dietaryFilter !== 'all';

  // Beverage pairing helper for dossier modal
  const getSommelierPairing = (item: MenuItem): string => {
    if (item.category === 'Bengali') {
      return item.isVegetarian ? 'Gondhoraj Lime Shonkolpo Cooler' : 'Heritage Amber Darjeeling First Flush';
    }
    if (item.category === 'Biryani') {
      return 'Royal Shahi Rose Badam Sharbat or Iced Gondhoraj Cooler';
    }
    if (item.category === 'North Indian') {
      return 'Heritage Kesar Kulhad Chai or House Cold Brew Espresso';
    }
    if (item.category === 'Desserts') {
      return 'Malda Mango Velvet Tart with Steamed Assam Tea';
    }
    return 'Artisanal Spiced Cooler';
  };

  return (
    <section
      id="menu"
      aria-label="Interactive Restaurant Menu"
      className="py-24 sm:py-36 bg-deep-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-antique-gold font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span>The Culinary Anthology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-pure font-normal tracking-tight mb-4">
            The Interactive <span className="italic gold-gradient-text">Menu</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mb-5" />
          <p className="text-cream-muted text-sm sm:text-base leading-relaxed font-light">
            Explore 22 curated regional masterworks: riverine Bengali curries, slow-cooked royal Mughal handis, 
            legendary Tangra Chinese wok preparations, and artisanal winter jaggery desserts.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-navy-surface border border-gold/30 text-[11px] text-gold-light font-mono shadow-sm">
            <AlertCircle className="w-3.5 h-3.5 text-antique-gold" />
            <span>Illustrative sample menu & pricing • Not an online ordering system</span>
          </div>
        </div>

        {/* Filter & Search Bar Controls in Navy Surface */}
        <div className="bg-navy-surface/90 backdrop-blur-xl rounded-2xl p-4 sm:p-7 border border-gold/30 shadow-2xl mb-12 space-y-6">
          
          {/* Top Row: Search & Dietary Toggles */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input with Antique Gold Focus Ring */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-antique-gold absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by dish name, spice, or ingredient (e.g. Kosha, Biryani, Prawn, Paneer)..."
                className="w-full pl-11 pr-10 py-3.5 bg-deep-navy/95 border border-gold/30 rounded-xl text-cream-pure placeholder-cream/40 text-sm focus:outline-none focus:border-antique-gold focus:ring-1 focus:ring-antique-gold/50 transition-all font-light"
                aria-label="Search dishes"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search input"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-cream/50 hover:text-gold-light transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-deep-navy/95 rounded-xl border border-gold/30 shrink-0 self-start md:self-auto shadow-inner">
              <span className="text-[10px] uppercase tracking-wider text-antique-gold/80 px-2.5 py-1 hidden sm:inline-flex items-center gap-1 font-mono">
                <SlidersHorizontal className="w-3 h-3" />
                <span>Diet:</span>
              </span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'btn-luxury-gold text-navy-dark font-semibold shadow-md'
                    : 'text-cream/70 hover:text-cream hover:bg-navy-surface'
                }`}
              >
                All (22)
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-600 text-white font-semibold shadow-md'
                    : 'text-emerald-400/80 hover:text-emerald-300 hover:bg-navy-surface'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Pure Veg</span>
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-rose-700 text-white font-semibold shadow-md'
                    : 'text-rose-400/80 hover:text-rose-300 hover:bg-navy-surface'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Horizontal Scrolling Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-1 no-scrollbar border-t border-gold/20">
            {CATEGORIES.map((category) => {
              const count = category === 'All' 
                ? menuItems.length 
                : menuItems.filter((i) => i.category === category).length;

              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'btn-luxury-gold shadow-md text-navy-dark font-semibold'
                      : 'bg-deep-navy/80 text-cream/80 hover:text-gold-light hover:bg-navy-surface border border-gold/25'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="tracking-wide">{category}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-navy-dark/20 text-navy-dark font-bold' : 'bg-gold/15 text-antique-gold'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Filter Metrics & Reset Action */}
          <div className="flex items-center justify-between text-xs text-cream/70 pt-1 font-light">
            <span>
              Showing <strong className="text-gold-bright font-semibold font-mono">{filteredItems.length}</strong> delicacies
              {selectedCategory !== 'All' && <span> under <strong className="text-cream-pure">{selectedCategory}</strong></span>}
              {dietaryFilter !== 'all' && <span> ({dietaryFilter === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'})</span>}
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </span>

            {isFiltered && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-antique-gold hover:text-gold-light hover:underline font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onSelect={(selected) => setSelectedItem(selected)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-navy-surface/50 rounded-2xl border border-dashed border-gold/30 max-w-lg mx-auto shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-navy/80 text-antique-gold flex items-center justify-center mx-auto mb-4 border border-gold/30">
              <UtensilsCrossed className="w-6 h-6 text-antique-gold" />
            </div>
            <h3 className="font-serif text-2xl text-cream-pure font-normal mb-2">
              No Preparations Found
            </h3>
            <p className="text-xs text-cream-muted leading-relaxed mb-6 font-light">
              We couldn't locate any dishes matching your specific search keyword or dietary criteria.
            </p>
            <button
              onClick={handleResetFilters}
              className="btn-luxury-gold px-6 py-2.5 rounded-full text-xs cursor-pointer shadow-lg inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>

      {/* Chef's Tasting Dossier Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-item-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-navy-surface border border-gold/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/10] w-full bg-deep-navy">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-surface via-transparent to-black/50" />

              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close chef's dossier"
                className="absolute top-3.5 right-3.5 p-2 rounded-full bg-deep-navy/80 text-cream hover:text-gold-light hover:bg-navy-dark transition-colors cursor-pointer border border-gold/30"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-deep-navy/95 backdrop-blur-md px-3 py-1 rounded-full border border-gold/40 text-[10px] font-semibold uppercase tracking-wider font-mono">
                  {selectedItem.isVegetarian ? (
                    <>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-emerald-300">Pure Vegetarian</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="text-rose-300">Non-Vegetarian</span>
                    </>
                  )}
                </div>

                <div className="bg-primary-navy text-gold-bright border border-gold/50 px-4 py-1 rounded-xl font-serif text-lg font-bold shadow-xl">
                  ₹{selectedItem.price}
                </div>
              </div>
            </div>

            {/* Modal Body & Sommelier Note */}
            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-antique-gold mb-1 font-mono">
                  <span className="uppercase tracking-widest">{selectedItem.category} Heritage</span>
                  {selectedItem.bengaliName && (
                    <span className="font-serif text-lg text-gold-light font-normal">
                      {selectedItem.bengaliName}
                    </span>
                  )}
                </div>
                <h3 id="modal-item-title" className="font-serif text-2xl text-cream-pure font-normal">
                  {selectedItem.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-light">
                {selectedItem.description}
              </p>

              {/* Sommelier Beverage Pairing */}
              <div className="p-3.5 rounded-xl bg-deep-navy/90 border border-gold/25 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-primary-navy text-gold-bright shrink-0">
                  <Wine className="w-4 h-4 text-gold-bright" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-antique-gold font-mono block">
                    Recommended Pairing
                  </span>
                  <p className="text-xs text-cream-light font-medium mt-0.5">
                    {getSommelierPairing(selectedItem)}
                  </p>
                </div>
              </div>

              {/* Tags & Spice Note */}
              <div className="pt-2 flex items-center justify-between border-t border-gold/15 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-deep-navy border border-gold/20 text-cream/80 text-[10px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedItem.spiceLevel !== undefined && selectedItem.spiceLevel > 0 && (
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-mono">
                    <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Spice Level {selectedItem.spiceLevel}/3</span>
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Enquiry Button */}
              <div className="pt-3 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-cream/50 italic">
                  <ShieldCheck className="w-3.5 h-3.5 text-antique-gold" />
                  <span>Freshly prepared per order</span>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(
                    `Hello The Old Gallery, I am enquiring about reserving a table to taste "${selectedItem.name}" (₹${selectedItem.price}) at your Restro Cafe in Malda.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-gold w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-navy-dark" />
                  <span>Enquire For Table</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
