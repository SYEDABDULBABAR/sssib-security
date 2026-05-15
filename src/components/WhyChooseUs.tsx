'use client';

import { motion } from 'framer-motion';
import { whyChooseUs } from '@/lib/data';
import SectionWrapper from './SectionWrapper';

export default function WhyChooseUs() {
  return (
    <SectionWrapper className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="section-title text-primary mt-3">The SSSIB Advantage</h2>
          <p className="section-subtitle mt-4">
            What sets us apart from other security providers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 border border-gray-100 card-hover hover:border-secondary/20 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-5 group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
