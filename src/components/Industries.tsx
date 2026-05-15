'use client';

import { motion } from 'framer-motion';
import { industries } from '@/lib/data';
import SectionWrapper from './SectionWrapper';

export default function Industries() {
  return (
    <SectionWrapper id="industries" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Industries We Serve</span>
          <h2 className="section-title text-primary mt-3">Sector-Specific Expertise</h2>
          <p className="section-subtitle mt-4">
            Specialised security solutions tailored to the unique challenges of your industry
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 border border-gray-100 card-hover hover:bg-white hover:border-secondary/30 hover:shadow-lg cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <industry.icon className="w-7 h-7 text-secondary" />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-primary transition-colors">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
