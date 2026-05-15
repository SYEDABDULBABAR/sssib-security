'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaHandshake, FaLightbulb, FaCheckCircle, FaClipboardList, FaUsers, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig, stats } from '@/lib/data';
import ScrollToTop from '@/components/ScrollToTop';
import QuotePopup from '@/components/QuotePopup';
import LiveChat from '@/components/LiveChat';

const features = [
  { icon: FaShieldAlt, title: 'Our Mission', text: 'To provide exceptional, technology-driven security solutions that protect people, assets, and reputations across the United Kingdom.' },
  { icon: FaHandshake, title: 'Client Focus', text: 'We build lasting partnerships through personalised service, transparent communication, and unwavering commitment to client satisfaction.' },
  { icon: FaLightbulb, title: 'Innovation', text: 'Leveraging cutting-edge technology including AI surveillance, real-time reporting, and digital patrol management systems.' },
];

export default function AboutPage() {
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
                <span className="text-sm text-gray-300">About Us</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Why Choose <span className="text-gradient">SSSIB</span>?
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {siteConfig.fullName} — {siteConfig.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-secondary">{stat.value}{stat.suffix}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-gray-50">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="section-title text-primary">Our Story</h2>
                <div className="w-20 h-1 bg-secondary" />
                <p className="text-gray-600 leading-relaxed text-lg">
                  Founded in 2000, SSSIB has grown from a small local security provider
                  into one of the UK&apos;s most trusted security companies. Our journey has been
                  defined by an unwavering commitment to excellence, innovation, and client satisfaction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we employ over 2,500 highly trained, SIA-licensed security professionals
                  across 50+ UK cities. Our technology-driven approach combines the best of human
                  expertise with cutting-edge security systems to deliver comprehensive protection
                  solutions tailored to each client&apos;s unique needs.
                </p>
                <a href="/services" className="btn-primary inline-flex">
                  View Our Services <FaArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                {features.map((feature, i) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 card-hover hover:border-secondary/20 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: FaCheckCircle, label: 'SIA Approved' },
                { icon: FaClipboardList, label: 'ISO 9001 Certified' },
                { icon: FaUsers, label: 'Investors in People' },
                { icon: FaShieldAlt, label: 'Cyber Essentials' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <item.icon className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-base font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
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
              <h2 className="section-title mb-4">Ready to Work with Us?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Get in touch today for a free consultation and security assessment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/#contact" className="btn-primary text-base py-3.5 px-8">
                  Contact Us <FaArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+448001234567" className="btn-outline text-base py-3.5 px-8">
                  <FaPhoneAlt className="w-4 h-4" /> {siteConfig.phone}
                </a>
              </div>
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
