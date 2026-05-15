'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaShieldAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function QuotePopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', details: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, company: '' }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success('Quote request submitted! We will contact you within 2 hours.');
      setForm({ name: '', email: '', phone: '', service: '', details: '' });
      setOpen(false);
    } else {
      toast.error('Failed to submit. Please try again.');
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-secondary text-primary px-3 py-4 rounded-l-lg shadow-lg hover:bg-secondary-light transition-colors hidden lg:block"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Request a quote"
      >
        Request a Quote
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative p-6 sm:p-8">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <FaTimes className="w-4 h-4 text-gray-500" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <FaShieldAlt className="w-8 h-8 text-secondary" />
                  <div>
                    <h3 className="text-xl font-bold text-primary">Request a Quote</h3>
                    <p className="text-sm text-gray-500">Get a free, no-obligation quote within 2 hours</p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                  <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-500">
                    <option value="">Service Required</option>
                    <option>Security Guards</option>
                    <option>Event Security</option>
                    <option>CCTV Monitoring</option>
                    <option>Mobile Patrols</option>
                    <option>Key Holding & Alarm Response</option>
                    <option>Door Supervision</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Brief description of your requirements..." value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" />
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5">
                    <FaPaperPlane className="w-4 h-4" /> {loading ? 'Submitting...' : 'Submit Request'}
                  </button>
                  <p className="text-xs text-gray-400 text-center">We respect your privacy. No spam, guaranteed.</p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
