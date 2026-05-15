'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkerAlt, FaShieldAlt, FaGlobeEurope, FaPhoneAlt } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allLocations, siteConfig } from '@/lib/data';
import ScrollToTop from '@/components/ScrollToTop';
import QuotePopup from '@/components/QuotePopup';
import LiveChat from '@/components/LiveChat';

export default function LocationsPage() {
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
                <FaGlobeEurope className="w-4 h-4 text-secondary" />
                <span className="text-sm text-gray-300">Nationwide Coverage</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Our <span className="text-gradient">Locations</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                SSSIB provides professional security services across all major UK regions and cities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Locations */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allLocations.map((loc, i) => (
                <motion.a
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl p-6 border border-gray-100 card-hover hover:border-secondary/30 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <FaMapMarkerAlt className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{loc.region}</h3>
                      <p className="text-sm text-gray-500">{loc.cities.length} cities covered</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {loc.cities.slice(0, 3).map((city) => (
                      <li key={city} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaMapMarkerAlt className="w-2.5 h-2.5 text-secondary/60" />
                        {city}
                      </li>
                    ))}
                    {loc.cities.length > 3 && (
                      <li className="text-sm text-secondary font-medium">+{loc.cities.length - 3} more</li>
                    )}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary group-hover:text-secondary-light transition-colors">
                    View Location <FaArrowRight className="w-3 h-3" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="section-padding gradient-primary text-white">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="section-title mb-4">Nationwide Security Coverage</h2>
              <p className="text-lg text-gray-300 mb-8">
                With teams stationed across all major UK regions, SSSIB provides rapid response and local expertise wherever you are. From the Scottish Highlands to the South Coast, we deliver consistent, professional security services tailored to your location.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/services" className="btn-primary text-base py-3.5 px-8">
                  View Our Services <FaArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+448001234567" className="btn-outline text-base py-3.5 px-8">
                  <FaPhoneAlt className="w-4 h-4" /> {siteConfig.phone}
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
              <h2 className="section-title text-primary mb-4">Don&apos;t See Your Location?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We operate across the entire UK. Contact us to find out if we provide security services in your area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/#contact" className="btn-primary text-base py-3.5 px-8">
                  Ask About Your Area <FaArrowRight className="w-4 h-4" />
                </a>
                <a href={`tel:${siteConfig.phone}`} className="btn-dark text-base py-3.5 px-8">
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
