'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaCheckCircle, FaPhoneAlt, FaArrowLeft } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allServices, serviceDetails, siteConfig } from '@/lib/data';
import ScrollToTop from '@/components/ScrollToTop';
import QuotePopup from '@/components/QuotePopup';
import LiveChat from '@/components/LiveChat';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = allServices.find(s => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  const relatedServices = allServices.filter(s => s.category === service.category && s.slug !== slug).slice(0, 3);

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
              <a href="/services" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-secondary mb-6 transition-colors">
                <FaArrowLeft className="w-3 h-3" /> Back to All Services
              </a>
              <span className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 mb-6">
                <FaShieldAlt className="w-4 h-4 text-secondary" />
                <span className="text-sm text-gray-300">{service.category}</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                {service.description}
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
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title text-primary">Overview</h2>
                <div className="w-20 h-1 bg-secondary mt-4 mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed">{detail ? detail.longDescription : service.description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-primary mb-6">Key Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Category</span>
                      <p className="text-sm text-gray-600">{service.category}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Availability</span>
                      <p className="text-sm text-gray-600">24/7, Nationwide Coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Contact</span>
                      <p className="text-sm text-gray-600">{siteConfig.phone}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        {detail && (
          <section className="section-padding bg-gray-50">
            <div className="container-main">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="section-title text-primary">Key Features</h2>
                  <div className="w-20 h-1 bg-secondary mt-4 mb-8" />
                  <ul className="space-y-4">
                    {detail.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <FaCheckCircle className="w-3.5 h-3.5 text-secondary" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="section-title text-primary">Benefits</h2>
                  <div className="w-20 h-1 bg-secondary mt-4 mb-8" />
                  <ul className="space-y-4">
                    {detail.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <FaArrowRight className="w-3.5 h-3.5 text-secondary" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-main">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="section-title text-primary">Related Services</h2>
                <p className="text-gray-600 mt-4">More services in {service.category}</p>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((rel, i) => (
                  <motion.a
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white rounded-xl p-6 border border-gray-100 card-hover hover:border-secondary/30 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <rel.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{rel.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{rel.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary group-hover:text-secondary-light transition-colors">
                      Learn More <FaArrowRight className="w-3 h-3" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-padding gradient-primary text-white">
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="section-title mb-4">Need {service.title}?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today for a free consultation and tailored security solution for your business.
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
