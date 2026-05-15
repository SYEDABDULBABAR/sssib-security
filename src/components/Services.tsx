'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { allServices } from '@/lib/data';

const previewServices = allServices;
import SectionWrapper from './SectionWrapper';

export default function Services() {
  return (
    <SectionWrapper id="services" className="section-padding gradient-primary text-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h2 className="section-title mt-3">Comprehensive Security Solutions</h2>
          <p className="section-subtitle mt-4 text-gray-400">
            Tailored security services designed to protect your business, people, and assets
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {previewServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 card-hover hover:bg-white/10 hover:border-secondary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">{service.description}</p>
              <a
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary-light transition-colors"
              >
                Learn More <FaArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/services" className="btn-outline">
              View All Services <FaArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-primary">
              Get a Free Consultation <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
