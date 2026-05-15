'use client';

import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex items-center gap-3 animate-slide-up">
      <a href="tel:+448001234567" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors">
        <FaPhoneAlt className="w-3.5 h-3.5" /> Call Us
      </a>
      <a href="#contact" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary text-primary font-medium text-sm hover:bg-secondary-light transition-colors">
        Get Quote <FaArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
