'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaUserGraduate, FaClock, FaPoundSign, FaMobileAlt, FaUsers, FaShieldAlt, FaPhoneAlt, FaBriefcase, FaStar } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { careers, siteConfig } from '@/lib/data';
import ScrollToTop from '@/components/ScrollToTop';
import QuotePopup from '@/components/QuotePopup';
import LiveChat from '@/components/LiveChat';
import toast from 'react-hot-toast';

const benefitIcons = [FaCheckCircle, FaUserGraduate, FaArrowRight, FaClock, FaClock, FaPoundSign, FaMobileAlt, FaUsers];

const openPositions = [
  { title: 'Security Guard', type: 'Full-time / Part-time', locations: ['London', 'Manchester', 'Birmingham', 'Bristol'] },
  { title: 'Door Supervisor', type: 'Full-time / Part-time', locations: ['London', 'Liverpool', 'Leeds', 'Glasgow'] },
  { title: 'CCTV Operator', type: 'Full-time', locations: ['London', 'Birmingham', 'Manchester'] },
  { title: 'Mobile Patrol Officer', type: 'Full-time', locations: ['All UK Regions'] },
  { title: 'Event Security Steward', type: 'Zero-hour / Part-time', locations: ['London', 'South East', 'West Midlands'] },
  { title: 'Site Supervisor', type: 'Full-time', locations: ['London', 'Birmingham', 'Manchester', 'Bristol'] },
  { title: 'Operations Manager', type: 'Full-time', locations: ['London', 'Manchester'] },
  { title: 'Security Consultant', type: 'Full-time', locations: ['London', 'Remote'] },
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/careers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, experience: '', coverLetter: '' }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success('Application submitted! We will review and contact you.');
      setForm({ name: '', email: '', phone: '', position: '' });
    } else {
      toast.error('Failed to submit. Please try again.');
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.1),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="relative container-main">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 mb-6">
                <FaShieldAlt className="w-4 h-4 text-secondary" />
                <span className="text-sm text-gray-300">Join Our Team</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Careers at <span className="text-gradient">SSSIB</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Become part of the UK&apos;s most trusted security company. We&apos;re always
                looking for dedicated professionals to join our growing team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title text-primary">Why Work With Us?</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                We value our people and offer exceptional benefits and career growth opportunities.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {careers.benefits.map((benefit, i) => {
                const Icon = benefitIcons[i] || FaCheckCircle;
                return (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center card-hover hover:border-secondary/20 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-gray-50">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title text-primary">Open Positions</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Current vacancies across our UK operations
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {openPositions.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-100 card-hover hover:border-secondary/30 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <FaBriefcase className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{job.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full mb-3">
                    <FaStar className="w-3 h-3" /> {job.type}
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    Locations: {job.locations.join(', ')}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Form */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title text-primary">Apply Now</h2>
                <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                  Ready to join the SSSIB team? Fill out the form and we&apos;ll be in touch.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaPhoneAlt className="w-4 h-4 text-secondary" />
                    <span>{siteConfig.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaUsers className="w-4 h-4 text-secondary" />
                    <span>2,500+ team members nationwide</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaCheckCircle className="w-4 h-4 text-secondary" />
                    <span>Full SIA training provided</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-primary mb-6">Submit Your Application</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                  <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
                  <select value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-500" required>
                    <option value="">Position Interested In</option>
                    {openPositions.map((job) => (
                      <option key={job.title}>{job.title}</option>
                    ))}
                  </select>
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5">
                    {loading ? 'Submitting...' : 'Submit Application'} <FaArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-primary text-white">
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="section-title mb-4">Don&apos;t See the Right Role?</h2>
              <p className="text-lg text-gray-300 mb-8">
                We&apos;re always on the lookout for talented individuals. Send us your CV anyway.
              </p>
              <a href="mailto:careers@sssib.co.uk" className="btn-primary text-base py-3.5 px-8">
                Send Your CV <FaArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <QuotePopup />
      <LiveChat />
    </>
  );
}
