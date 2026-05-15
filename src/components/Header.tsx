'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaMoon, FaSun, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { navLinks, siteConfig, serviceCategories, toSlug } from '@/lib/data';
import { useTheme } from '@/lib/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItemClass = (active = false) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      scrolled
        ? 'text-gray-700 hover:text-secondary hover:bg-gray-50'
        : 'text-white/80 hover:text-white hover:bg-white/5'
    } ${active ? 'text-secondary' : ''}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        {/* Top bar */}
        <div className={`hidden lg:flex items-center justify-between py-2 text-sm border-b transition-colors ${
          scrolled ? 'border-gray-100 text-gray-600' : 'border-white/10 text-white/80'
        }`}>
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <FaPhoneAlt className="w-3 h-3" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <FaEnvelope className="w-3 h-3" /> {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs">SIA Approved Contractor</span>
            <button onClick={toggle} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun className="w-3.5 h-3.5" /> : <FaMoon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Main nav */}
        <nav className="flex items-center justify-between py-3 lg:py-4">
          <a href="/" className="flex items-center gap-2.5 group">
            <img src={scrolled ? "/logo-icon.svg" : "/logo-icon-light.svg"} alt="SSSIB" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className={`text-sm font-bold leading-tight tracking-tight transition-colors ${
                scrolled ? 'text-primary' : 'text-white'
              }`}>
                SHARK SECURITY
              </span>
              <span className={`text-[10px] font-semibold tracking-wider transition-colors ${
                scrolled ? 'text-secondary' : 'text-secondary'
              }`}>
                SSSIB
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={`${navItemClass()} inline-flex items-center gap-1`}
                    >
                      {link.label} <FaChevronDown className={`w-2.5 h-2.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </a>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-2 w-[640px]"
                        >
                          <div className={`rounded-xl shadow-2xl border p-6 grid grid-cols-2 gap-6 ${
                            scrolled ? 'bg-white border-gray-100' : 'bg-primary-dark/95 border-white/10 backdrop-blur-xl'
                          }`}>
                            {serviceCategories.map((cat) => (
                              <div key={cat.name}>
                                <a
                                  href="/services"
                                  className={`text-xs font-semibold uppercase tracking-wider mb-3 block transition-colors ${
                                    scrolled ? 'text-secondary' : 'text-secondary'
                                  }`}
                                >
                                  {cat.name} <FaArrowRight className="w-2.5 h-2.5 inline" />
                                </a>
                                <ul className="space-y-1">
                                  {cat.services.map((svc) => (
                                    <li key={svc.title}>
                                      <a
                                        href={`/services/${toSlug(svc.title)}`}
                                        className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${
                                          scrolled
                                            ? 'text-gray-600 hover:text-secondary hover:bg-gray-50'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`}
                                      >
                                        <svc.icon className="w-3.5 h-3.5 text-secondary shrink-0" />
                                        {svc.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <a key={link.href} href={link.href} className={navItemClass()}>
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 btn-primary text-sm py-2 px-4"
            >
              Request Quote
            </a>
            <button
              onClick={toggle}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/80 hover:bg-white/5'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/80 hover:bg-white/5'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-xl overflow-hidden"
          >
            <div className="container-main py-4 space-y-1">
              {navLinks.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-secondary transition-all"
                      >
                        Services <FaChevronDown className={`w-3 h-3 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-3">
                              {serviceCategories.map((cat) => (
                                <div key={cat.name}>
                                  <a
                                    href="/services"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary"
                                  >
                                    {cat.name}
                                  </a>
                                  <div className="space-y-0.5">
                                    {cat.services.map((svc) => (
                                      <a
                                        key={svc.title}
                                        href={`/services/${toSlug(svc.title)}`}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-secondary hover:bg-gray-50 transition-all"
                                      >
                                        <svc.icon className="w-3.5 h-3.5 text-secondary shrink-0" />
                                        {svc.title}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-secondary transition-all"
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="border-t pt-4 mt-4 space-y-3">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 px-4 text-gray-600 hover:text-secondary">
                  <FaPhoneAlt className="w-3.5 h-3.5" /> {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 px-4 text-gray-600 hover:text-secondary">
                  <FaEnvelope className="w-3.5 h-3.5" /> {siteConfig.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
