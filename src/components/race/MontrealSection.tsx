'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { copy } from '@/content/copy';
import { season2026 } from '@/content/season-2026';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function MontrealSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Derive from season data
  const montreal = season2026.rounds.find((r) => r.venue === 'Montreal');
  const openingRace = montreal?.races.find((r) => r.name === 'Opening Race');
  const reverseRace = montreal?.races.find((r) => r.name === 'Reverse Grid Race');
  const featureRace = montreal?.races.find((r) => r.name === 'Feature Race');

  return (
    <section
      id="montreal"
      ref={sectionRef}
      className="relative bg-[#101010] py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Kicker */}
        <motion.span
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-data text-[10px] uppercase tracking-widest text-[#FAF8F2]/40 block mb-4"
        >
          {copy.montrealKicker}
        </motion.span>

        {/* Display headline */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.08 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-[#FAF8F2] leading-[1.05] tracking-tight mb-6"
        >
          {copy.montrealDisplay}
        </motion.h3>

        {/* Body text — correctly describes penalty, never calls it a podium */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.16 }}
          className="text-base text-[#FAF8F2]/70 max-w-xl leading-relaxed mb-10 md:mb-14"
        >
          {copy.montrealBody}
        </motion.p>

        {/* Data strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-x-8 gap-y-4"
        >
          {/* Opening */}
          <motion.div variants={fadeInUp} className="border-t border-[#FAF8F2]/10 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#FAF8F2]/40 block mb-1">
              OPENING
            </span>
            <span className="font-data text-xl text-[#FAF8F2] tabular-nums">
              P{openingRace?.position}
            </span>
          </motion.div>

          {/* Reverse Grid — penalty note with red accent */}
          <motion.div variants={fadeInUp} className="border-t border-[#FAF8F2]/10 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#FAF8F2]/40 block mb-1">
              REVERSE GRID
            </span>
            <span className="font-data text-xl text-[#F22316] tabular-nums">
              P{reverseRace?.position}
            </span>
            <span className="font-data text-xs text-[#F22316]/80 ml-2 uppercase tracking-wider">
              After Penalty
            </span>
          </motion.div>

          {/* Feature */}
          <motion.div variants={fadeInUp} className="border-t border-[#FAF8F2]/10 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#FAF8F2]/40 block mb-1">
              FEATURE
            </span>
            <span className="font-data text-xl text-[#FAF8F2] tabular-nums">
              P{featureRace?.position}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
