'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkerAlt, FaShieldAlt, FaCheckCircle, FaPhoneAlt, FaArrowLeft, FaCity, FaUsers } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allLocations, locationDetails, siteConfig } from '@/lib/data';
import ScrollToTop from '@/components/ScrollToTop';
import QuotePopup from '@/components/QuotePopup';
import LiveChat from '@/components/LiveChat';

export default function LocationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const location = allLocations.find(l => l.slug === slug);
  const detail = locationDetails[slug];

  if (!location) {
    notFound();
  }

  const otherLocations = allLocations.filter(l => l.slug !== slug);

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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
              <a href="/locations" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-secondary mb-6 transition-colors">
                <FaArrowLeft className="w-3 h-3" /> All Locations
              </a>
              <span className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 mb-6">
                <FaMapMarkerAlt className="w-4 h-4 text-secondary" />
                <span className="text-sm text-gray-300">{detail ? `Population: ${detail.population}` : 'Security Coverage'}</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Security Services in <span className="text-gradient">{location.region}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Professional SSSIB security services across {location.region}&apos;s major cities and business centres.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="/#contact" className="btn-primary text-base py-3.5 px-8">
                  Get a Quote <FaArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+448001234567" className="btn-outline text-base py-3.5 px-8">
                  <FaPhoneAlt className="w-4 h-4" /> {siteConfig.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        {detail && (
          <section className="section-padding bg-white">
            <div className="container-main">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="section-title text-primary">About {location.region}</h2>
                  <div className="w-20 h-1 bg-secondary mt-4 mb-6" />
                  <p className="text-gray-600 text-lg leading-relaxed">{detail.description}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-primary mb-6">Region Overview</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Region</span>
                        <p className="text-sm text-gray-600">{location.region}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCity className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Key Cities</span>
                        <p className="text-sm text-gray-600">{location.cities.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaUsers className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Population</span>
                        <p className="text-sm text-gray-600">{detail.population}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaShieldAlt className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Services</span>
                        <p className="text-sm text-gray-600">All SSSIB security services available</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Highlights */}
        {detail && (
          <section className="section-padding bg-gray-50">
            <div className="container-main">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="section-title text-primary">Why Choose SSSIB in {location.region}?</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  Local expertise backed by national resources
                </p>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {detail.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-6 bg-white rounded-xl border border-gray-100 card-hover hover:border-secondary/20 hover:shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <FaCheckCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cities */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="section-title text-primary">Cities We Cover</h2>
              <p className="text-gray-600 mt-4">Security services in all major {location.region} cities</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {location.cities.map((city, i) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <FaMapMarkerAlt className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700 font-medium">{city}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="section-padding bg-gray-50">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="section-title text-primary">Other Regions</h2>
              <p className="text-gray-600 mt-4">Explore our coverage across the UK</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherLocations.map((loc, i) => (
                <motion.a
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-5 bg-white rounded-xl border border-gray-100 card-hover hover:border-secondary/30 hover:shadow-lg group"
                >
                  <FaMapMarkerAlt className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <span className="text-gray-700 font-medium group-hover:text-secondary transition-colors">{loc.region}</span>
                    <p className="text-xs text-gray-500">{loc.cities.length} cities</p>
                  </div>
                  <FaArrowRight className="w-3 h-3 text-secondary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
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
              <h2 className="section-title mb-4">Need Security in {location.region}?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today for a free consultation and security assessment in your area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/#contact" className="btn-primary text-base py-3.5 px-8">
                  Get a Free Consultation <FaArrowRight className="w-4 h-4" />
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
