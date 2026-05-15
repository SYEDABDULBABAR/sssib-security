'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { locations } from '@/lib/data';
import SectionWrapper from './SectionWrapper';

const regions = [...new Set(locations.map(l => l.region))];

function regionSlug(region: string): string {
  return region.toLowerCase().replace(/&/g, 'and').replace(/[\s]+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function Locations() {
  return (
    <SectionWrapper id="locations" className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Locations</span>
          <h2 className="section-title text-primary mt-3">Nationwide Coverage</h2>
          <p className="section-subtitle mt-4">
            Security services available across all major UK cities and regions
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-light min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 400 500" className="w-full h-full p-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 50 L280 120 L300 250 L250 400 L200 450 L150 400 L100 250 L120 120 Z" stroke="white" strokeWidth="2" />
                <path d="M120 120 L200 50 L280 120" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="relative text-center p-8">
              <FaMapMarkerAlt className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Covering All UK Regions</h3>
              <p className="text-gray-300">Rapid deployment across England, Scotland, Wales & Northern Ireland</p>
              <div className="flex items-center justify-center gap-2 mt-6 text-secondary font-semibold">
                <span className="w-2 h-2 bg-secondary rounded-full animate-ping" />
                <span className="text-sm">Available 24/7</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              {regions.map((region) => (
                <div key={region}>
                  <a href={`/locations/${regionSlug(region)}`} className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3 block hover:text-secondary-light transition-colors">
                    {region} <FaArrowRight className="w-2.5 h-2.5 inline" />
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.filter(l => l.region === region).map((loc) => (
                      <div
                        key={loc.city}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-gray-100 hover:border-secondary/20 hover:shadow-sm transition-all"
                      >
                        <FaMapMarkerAlt className="w-3 h-3 text-secondary shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{loc.city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/locations" className="btn-primary">
              View All Locations <FaArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-dark">
              Check Availability in Your Area <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
