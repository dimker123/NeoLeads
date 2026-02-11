import React, { useState, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';

// Lazy load heavy components "below the fold"
const PainPoints = React.lazy(() => import('./components/PainPoints'));
const Method = React.lazy(() => import('./components/Method'));
const Sectors = React.lazy(() => import('./components/Sectors'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const LegalNotice = React.lazy(() => import('./components/LegalNotice'));
const CookiesPolicy = React.lazy(() => import('./components/CookiesPolicy'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));

// Lightweight loading placeholder
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export type PageType = 'home' | 'legal' | 'cookies' | 'privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden flex flex-col">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Suspense fallback={<SectionLoader />}>
              <div className="content-section"><PainPoints /></div>
              <div className="content-section"><Method /></div>
              <div className="content-section"><Sectors /></div>
              <div className="content-section"><Pricing /></div>
              <div className="content-section"><FAQ /></div>
              <div className="content-section"><Contact /></div>
            </Suspense>
          </>
        )}
        <Suspense fallback={<SectionLoader />}>
          {currentPage === 'legal' && <LegalNotice />}
          {currentPage === 'cookies' && <CookiesPolicy />}
          {currentPage === 'privacy' && <PrivacyPolicy />}
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer onNavigate={navigateTo} />
      </Suspense>
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}