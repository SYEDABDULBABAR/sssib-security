'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaHandshake, FaLightbulb, FaCheckCircle, FaClipboardList, FaUsers, FaArrowRight } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';

const features = [
  { icon: FaShieldAlt, title: 'Our Mission', text: 'To provide exceptional, technology-driven security solutions that protect people, assets, and reputations across the United Kingdom.' },
  { icon: FaHandshake, title: 'Client Focus', text: 'We build lasting partnerships through personalised service, transparent communication, and unwavering commitment to client satisfaction.' },
  { icon: FaLightbulb, title: 'Innovation', text: 'Leveraging cutting-edge technology including AI surveillance, real-time reporting, and digital patrol management systems.' },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5000+', label: 'Clients' },
  { value: '2500+', label: 'Staff' },
  { value: '50+', label: 'UK Cities' },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="section-title text-primary mt-3">Why Choose SSSIB?</h2>
          <p className="text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="/about" className="btn-dark inline-flex">
                Learn More About Us <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        <div className="space-y-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 card-hover hover:bg-white hover:border-secondary/20 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: FaCheckCircle, label: 'SIA Approved' },
            { icon: FaClipboardList, label: 'ISO 9001 Certified' },
            { icon: FaUsers, label: 'Investors in People' },
            { icon: FaShieldAlt, label: 'Cyber Essentials' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <item.icon className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
