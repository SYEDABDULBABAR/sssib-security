'use client';

import { motion } from 'framer-motion';
import { technologyFeatures } from '@/lib/data';
import SectionWrapper from './SectionWrapper';

export default function Technology() {
  return (
    <SectionWrapper className="section-padding gradient-primary text-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Technology</span>
          <h2 className="section-title mt-3">Technology-Driven Security</h2>
          <p className="section-subtitle mt-4 text-gray-400">
            Modern security solutions powered by cutting-edge technology and innovation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 card-hover hover:bg-white/10 hover:border-secondary/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-all">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
