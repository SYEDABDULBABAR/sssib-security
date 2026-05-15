'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { stats } from '@/lib/data';
import SectionWrapper from './SectionWrapper';

function Counter({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: React.ElementType }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center p-6">
      <Icon className="w-8 h-8 text-secondary mx-auto mb-3" />
      <div className="text-4xl sm:text-5xl font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400 mt-2">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <SectionWrapper className="gradient-primary py-16 sm:py-20">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
