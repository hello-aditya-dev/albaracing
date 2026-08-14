'use client';

import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { copy } from '@/content/copy';
import { pressItems, pressCategories } from '@/content/press';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { ArrowUpRight } from 'lucide-react';

export default function PressSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = activeCategory
    ? pressItems.filter((item) =>
        item.categories.includes(activeCategory.toLowerCase())
      )
    : pressItems;

  return (
    <section
      id="press"
      ref={ref}
      className="relative bg-[#101010] px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto"
      >
        {/* Headline */}
        <motion.h2
          variants={fadeInUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF8F2] tracking-tight"
        >
          {copy.pressHeadline}
        </motion.h2>

        {/* Filter buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 sm:mt-8 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-sm font-data text-[10px] sm:text-xs tracking-widest uppercase transition-colors ${
              activeCategory === null
                ? 'bg-[#FAF8F2] text-[#101010]'
                : 'bg-[#101010] text-[#FAF8F2]/60 border border-[#FAF8F2]/20 hover:text-[#FAF8F2] hover:border-[#FAF8F2]/40'
            }`}
          >
            ALL
          </button>
          {pressCategories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory((prev) =>
                  prev === category ? null : category
                )
              }
              className={`px-3 py-1.5 rounded-sm font-data text-[10px] sm:text-xs tracking-widest uppercase transition-colors ${
                activeCategory === category
                  ? 'bg-[#FAF8F2] text-[#101010]'
                  : 'bg-[#101010] text-[#FAF8F2]/60 border border-[#FAF8F2]/20 hover:text-[#FAF8F2] hover:border-[#FAF8F2]/40'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Press items grid */}
        <motion.div
          variants={staggerContainer}
          className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={`${item.publication}-${item.title}`}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -10 }}
                layout
                className="group flex flex-col gap-2 p-4 sm:p-5 rounded-sm border border-[#FAF8F2]/10 hover:border-[#FAF8F2]/25 transition-colors"
              >
                {/* Publication */}
                <span className="font-data text-[10px] sm:text-xs tracking-widest text-[#86C8E8] uppercase">
                  {item.publication}
                </span>

                {/* Title */}
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm sm:text-base text-[#FAF8F2] leading-snug group-hover:text-[#FAF8F2]/80 transition-colors"
                  >
                    {item.title}
                    <ArrowUpRight className="inline w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <span className="font-display text-sm sm:text-base text-[#FAF8F2] leading-snug">
                    {item.title}
                  </span>
                )}

                {/* Date + categories */}
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <span className="font-data text-[10px] text-[#FAF8F2]/40">
                    {item.date}
                  </span>
                  <span className="text-[#FAF8F2]/20">·</span>
                  <div className="flex flex-wrap gap-1">
                    {item.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-data text-[9px] tracking-wider text-[#FAF8F2]/30 uppercase"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 font-data text-xs text-[#FAF8F2]/40 tracking-widest uppercase"
          >
            No items in this category
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
