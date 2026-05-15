'use client';

import { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaUserGraduate, FaClock, FaPoundSign, FaMobileAlt, FaUsers } from 'react-icons/fa';
import { careers } from '@/lib/data';
import SectionWrapper from './SectionWrapper';
import toast from 'react-hot-toast';

const benefitIcons = [FaCheckCircle, FaUserGraduate, FaArrowRight, FaClock, FaClock, FaPoundSign, FaMobileAlt, FaUsers];

export default function Careers() {
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
    <SectionWrapper id="careers" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Careers</span>
            <h2 className="section-title text-primary mt-3">Join Our Team</h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Become part of the UK&apos;s most trusted security company. We&apos;re always 
              looking for dedicated professionals to join our growing team.
            </p>
            <div className="mt-8 space-y-3">
              {careers.benefits.map((benefit, i) => {
                const Icon = benefitIcons[i] || FaCheckCircle;
                return (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-6">Apply Now</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
              <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" required />
              <select value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-500">
                <option value="">Position Interested In</option>
                <option>Security Guard</option>
                <option>Door Supervisor</option>
                <option>CCTV Operator</option>
                <option>Mobile Patrol Officer</option>
                <option>Event Security</option>
                <option>Management</option>
              </select>
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5">
                {loading ? 'Submitting...' : 'Submit Application'} <FaArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                <a href="/careers" className="text-secondary hover:text-secondary-light font-medium">View all open positions <FaArrowRight className="w-3 h-3 inline" /></a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
