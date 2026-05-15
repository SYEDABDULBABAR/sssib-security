'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { blogPosts } from '@/lib/data';
import SectionWrapper from './SectionWrapper';

export default function Blog() {
  return (
    <SectionWrapper id="blog" className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Blog</span>
          <h2 className="section-title text-primary mt-3">Latest Security Insights</h2>
          <p className="section-subtitle mt-4">
            Stay informed with the latest security tips, industry updates, and company news
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 card-hover hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center overflow-hidden">
                <div className="text-secondary/30 text-6xl font-bold group-hover:scale-110 transition-transform duration-500">
                  <FaUser className="w-16 h-16" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">{post.category}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt className="w-3 h-3" /> {post.date}</span>
                </div>
                <h3 className="font-semibold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary-light transition-colors">
                  Read More <FaArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-dark">
            View All Articles <FaArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
