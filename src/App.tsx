import React, { Suspense, lazy } from 'react';
import { DisclaimerBanner } from './sections/DisclaimerBanner';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';

// Lazy-load below-the-fold sections to minimize critical JavaScript bundle size
const FeaturedDishes = lazy(() =>
  import('./sections/FeaturedDishes').then((m) => ({ default: m.FeaturedDishes }))
);
const MenuSection = lazy(() =>
  import('./sections/MenuSection').then((m) => ({ default: m.MenuSection }))
);
const GallerySection = lazy(() =>
  import('./sections/GallerySection').then((m) => ({ default: m.GallerySection }))
);
const ReservationSection = lazy(() =>
  import('./sections/ReservationSection').then((m) => ({ default: m.ReservationSection }))
);
const LocationSection = lazy(() =>
  import('./sections/LocationSection').then((m) => ({ default: m.LocationSection }))
);
const Footer = lazy(() =>
  import('./sections/Footer').then((m) => ({ default: m.Footer }))
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full max-w-full bg-deep-navy text-cream font-sans flex flex-col selection:bg-antique-gold/30 selection:text-gold-bright">
      {/* Top Portfolio Concept Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Sticky Vintage Navigation */}
      <Navbar />

      {/* Main Single Page Scroll Content */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden" id="main-content">
        <Hero />
        <About />
        <Suspense fallback={<div className="min-h-[160px] bg-deep-navy" aria-hidden="true" />}>
          <FeaturedDishes />
          <MenuSection />
          <GallerySection />
          <ReservationSection />
          <LocationSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="min-h-[80px] bg-deep-navy" aria-hidden="true" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
