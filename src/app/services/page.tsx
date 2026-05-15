'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaMapMarkerAlt, FaCheckCircle, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { serviceCategories, serviceLocations, siteConfig, toSlug } from '@/lib/data';
import ScrollToTop from '@/components/ScrollToTop';
import QuotePopup from '@/components/QuotePopup';
import LiveChat from '@/components/LiveChat';

export default function ServicesPage() {
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
                <span className="text-sm text-gray-300">Comprehensive Protection</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Our <span className="text-gradient">Security Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                From guarding to event security, we deliver tailored protection solutions across the UK.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Service Categories */}
        {serviceCategories.map((category, catIdx) => (
          <section key={category.name} className={`section-padding ${catIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container-main">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="section-title text-primary">{category.name}</h2>
                <div className="w-20 h-1 bg-secondary mt-4" />
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-xl p-6 border border-gray-100 card-hover hover:border-secondary/30 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <a href={`/services/${toSlug(service.title)}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary-light transition-colors">
                      Learn More <FaArrowRight className="w-3 h-3" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Service Locations */}
        <section className="section-padding gradient-primary text-white">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Coverage</span>
              <h2 className="section-title mt-3">Security Locations</h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                We provide security services across all major UK regions
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceLocations.map((loc, i) => (
                <motion.a
                  key={loc.region}
                  href={`/locations/${toSlug(loc.region)}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="block bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaMapMarkerAlt className="w-5 h-5 text-secondary" />
                    <h3 className="text-lg font-semibold group-hover:text-secondary transition-colors">{loc.region}</h3>
                  </div>
                  <ul className="space-y-2">
                    {loc.cities.map((city) => (
                      <li key={city} className="flex items-center gap-2 text-sm text-gray-400">
                        <FaCheckCircle className="w-3 h-3 text-secondary/60" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-400 mb-4">Nationwide coverage — we operate across the entire UK</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/locations" className="btn-outline">
                  <FaSearchLocation className="w-4 h-4" /> View All Locations
                </a>
                <a href="/#contact" className="btn-primary">
                  <FaPhoneAlt className="w-4 h-4" /> Contact Us for a Location Near You
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-white">
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="section-title text-primary mb-4">Need a Custom Security Solution?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Every client has unique requirements. Let us design a tailored security plan for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/#contact" className="btn-primary text-base py-3.5 px-8">
                  Get a Free Consultation <FaArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+448001234567" className="btn-dark text-base py-3.5 px-8">
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
