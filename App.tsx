import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Method from './components/Method';
import Sectors from './components/Sectors';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalNotice from './components/LegalNotice';
import CookiesPolicy from './components/CookiesPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';

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
            <PainPoints />
            <Method />
            <Sectors />
            <Pricing />
            <FAQ />
            <Contact />
          </>
        )}
        {currentPage === 'legal' && <LegalNotice />}
        {currentPage === 'cookies' && <CookiesPolicy />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
      </main>
      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}