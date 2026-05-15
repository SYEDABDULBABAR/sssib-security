'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '@/lib/data';
import SectionWrapper from './SectionWrapper';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <SectionWrapper className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="section-title text-primary mt-3">What Our Clients Say</h2>
          <p className="section-subtitle mt-4">
            Trusted by hundreds of businesses across the UK
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 sm:p-12 border border-gray-100">
            <FaQuoteLeft className="w-12 h-12 text-secondary/10 absolute top-6 left-6" />
            
            <div className="min-h-[200px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="text-center w-full"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-primary text-lg">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                    <div className="text-sm text-secondary font-medium mt-1">{t.company}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? 'bg-secondary w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
