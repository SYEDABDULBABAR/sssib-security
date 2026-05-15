'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyCTA from '@/components/StickyCTA';
import QuotePopup from '@/components/QuotePopup';
import LiveChat from '@/components/LiveChat';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <StickyCTA />
      <QuotePopup />
      <LiveChat />
    </>
  );
}
