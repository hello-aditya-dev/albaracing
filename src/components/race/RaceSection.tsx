'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { copy } from '@/content/copy';
import { season2026 } from '@/content/season-2026';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function RaceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Derive stats from season data
  const headToHead = `${season2026.qualifyingHeadToHead.larsen}–${season2026.qualifyingHeadToHead.gademan}`;

  const stats = [
    { value: 'P2', label: 'BEST 2026 QUALIFYING', accent: true },
    { value: headToHead, label: 'QUALIFYING HEAD-TO-HEAD VS GADEMAN', accent: false },
    { value: String(season2026.standing.value).padStart(2, '0'), label: 'CHAMPIONSHIP', accent: true },
    { value: String(season2026.points.value), label: 'POINTS', accent: true },
  ];

  return (
    <section
      id="race"
      ref={sectionRef}
      className="relative bg-[#101010] py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section opener */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-4"
        >
          <span className="font-data text-sm uppercase tracking-wider text-[#F22316]">
            {copy.raceOpeningDisplay}
          </span>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-[#FAF8F2]/70 max-w-2xl leading-relaxed mb-12 md:mb-16"
        >
          {copy.raceOpeningBody}
        </motion.p>

        {/* Stats strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="border-t border-[#FAF8F2]/10 pt-4"
            >
              <span
                className={`font-data text-3xl md:text-4xl leading-none tabular-nums block mb-2 ${
                  stat.accent ? 'text-[#F22316]' : 'text-[#FAF8F2]'
                }`}
              >
                {stat.value}
              </span>
              <span className="font-data text-[10px] uppercase tracking-wider text-[#FAF8F2]/40 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
