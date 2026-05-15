'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaArrowRight, FaPhoneAlt, FaCheckCircle, FaGlobeAmericas } from 'react-icons/fa';
import { trustBadges, siteConfig } from '@/lib/data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.03),transparent_50%)]" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        {/* Hexagonal grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z\' fill=\'none\' stroke=\'%23d4a853\' stroke-width=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '80px 80px' }} />
      </div>

      <div className="relative container-main pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10"
            >
              <FaGlobeAmericas className="w-4 h-4 text-secondary" />
              <span className="text-sm text-gray-300">{siteConfig.tagline}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="text-gradient">SHARK</span>{' '}
                <span className="text-white">SECURITY</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white/90">
                SERVICE AND INTELLIGENCE BUREAU
              </h2>
              <div className="inline-block bg-secondary/10 px-4 py-2 rounded-lg border border-secondary/20">
                <span className="text-lg sm:text-xl font-bold tracking-widest text-secondary">
                  ( SSSIB )
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed font-medium"
            >
              Global Vigilance, Elite Intelligence — protecting businesses, 
              events, and properties with cutting-edge technology and 
              highly trained personnel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary text-base py-3.5 px-8 shadow-lg shadow-secondary/20">
                Request a Quote <FaArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+448001234567" className="btn-outline text-base py-3.5 px-8">
                <FaPhoneAlt className="w-4 h-4" /> Talk to an Expert
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="glass rounded-xl p-3 flex items-start gap-3">
                  <badge.icon className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl absolute -top-20 -right-20" />
              <div className="relative glass rounded-3xl p-8 border border-white/10">
                {/* Shark logo large */}
                <img src="/logo-icon-light.svg" alt="SSSIB" className="w-36 h-36 mx-auto" />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-white/80 text-sm">SIA Licensed & Approved</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-white/80 text-sm">24/7 Nationwide Coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-white/80 text-sm">5000+ Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-white/80 text-sm">Rapid Response Teams</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
