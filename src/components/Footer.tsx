'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import { siteConfig, footerLinks } from '@/lib/data';
import toast from 'react-hot-toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success('Subscribed to newsletter!');
      setEmail('');
    } else {
      toast.error(data.error || 'Failed to subscribe');
    }
    setLoading(false);
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-main py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <a href="/" className="flex items-center gap-2.5">
              <img src="/logo-icon.svg" alt="SSSIB" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight">SHARK SECURITY</span>
                <span className="text-[10px] font-semibold tracking-wider text-secondary">SSSIB</span>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteConfig.fullName} — {siteConfig.tagline}. SIA licensed security services protecting businesses across the UK with professionalism, technology, and dedication.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="Social media">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">
                    <FaArrowRight className="w-2.5 h-2.5" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-gray-300">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">
                    <FaArrowRight className="w-2.5 h-2.5" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-gray-300">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{siteConfig.address}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-secondary transition-colors">
                  <FaPhoneAlt className="w-4 h-4 text-secondary shrink-0" /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-secondary transition-colors">
                  <FaEnvelope className="w-4 h-4 text-secondary shrink-0" /> {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary" required />
                <button type="submit" disabled={loading} className="px-3 py-2 rounded-lg bg-secondary text-primary hover:bg-secondary-light transition-colors disabled:opacity-50">
                  <FaPaperPlane className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-main py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {siteConfig.year} {siteConfig.fullName} ({siteConfig.name}). All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms &amp; Conditions</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
