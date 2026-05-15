'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { siteConfig } from '@/lib/data';
import SectionWrapper from './SectionWrapper';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      toast.success('Message sent! We will get back to you soon.');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      toast.error('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <SectionWrapper id="contact" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="section-title text-primary mt-3">Get in Touch</h2>
          <p className="section-subtitle mt-4">
            Ready to discuss your security needs? We&apos;re here to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-500">
                  <option value="">Service Needed</option>
                  <option>Security Guards</option>
                  <option>Event Security</option>
                  <option>CCTV Monitoring</option>
                  <option>Mobile Patrols</option>
                  <option>Key Holding</option>
                  <option>Door Supervision</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea placeholder="Tell us about your security requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" required />
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 text-base">
                <FaPaperPlane className="w-4 h-4" /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone</h4>
                  <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-secondary transition-colors">{siteConfig.phone}</a>
                  <p className="text-sm text-gray-400">24/7 emergency line</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <FaEnvelope className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-secondary transition-colors">{siteConfig.email}</a>
                  <p className="text-sm text-gray-400">We respond within 2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Office</h4>
                  <p className="text-gray-600">{siteConfig.address}</p>
                  <p className="text-sm text-gray-400">Head office</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <FaMapMarkerAlt className="w-10 h-10 text-secondary mx-auto mb-2" />
                <p className="text-white/80 text-sm mb-1">{siteConfig.address}</p>
                <p className="text-white/60 text-xs">Interactive map loads here</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/5 border border-secondary/10">
              <div>
                <p className="text-sm font-medium text-primary">Emergency?</p>
                <p className="text-xs text-gray-500">We respond within 30 minutes</p>
              </div>
              <a href="tel:+448001234567" className="btn-primary text-sm py-2 px-4">
                <FaPhoneAlt className="w-3 h-3" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
