'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { copy } from '@/content/copy';
import { season2026 } from '@/content/season-2026';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function SilverstoneSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Derive from season data
  const silverstone = season2026.rounds.find((r) => r.venue === 'Silverstone');
  const qualPosition = silverstone?.qualifying?.position;
  const reverseRace = silverstone?.races.find((r) => r.name === 'Reverse Grid Race');
  const featureRace = silverstone?.races.find((r) => r.name === 'Feature Race');

  return (
    <section
      id="silverstone"
      ref={sectionRef}
      className="relative bg-[#FAF8F2] py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Kicker */}
        <motion.span
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-data text-[10px] uppercase tracking-widest text-[#101010]/40 block mb-4"
        >
          {copy.silverstoneKicker}
        </motion.span>

        {/* Display headline — subdued tone */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.08 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-[#101010] leading-[1.05] tracking-tight mb-6"
        >
          {copy.silverstoneDisplay}
        </motion.h3>

        {/* Body text — factual, connecting to Zandvoort response */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.16 }}
          className="text-base text-[#101010]/70 max-w-xl leading-relaxed mb-10 md:mb-14"
        >
          {copy.silverstoneBody}
        </motion.p>

        {/* Data strip — subdued */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-x-8 gap-y-4"
        >
          {/* Qualifying */}
          <motion.div variants={fadeInUp} className="border-t border-[#101010]/10 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#101010]/40 block mb-1">
              QUALIFYING
            </span>
            <span className="font-data text-xl text-[#101010]/70 tabular-nums">
              P{qualPosition}
            </span>
          </motion.div>

          {/* Reverse Grid */}
          <motion.div variants={fadeInUp} className="border-t border-[#101010]/10 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#101010]/40 block mb-1">
              REVERSE GRID
            </span>
            <span className="font-data text-xl text-[#101010]/70 tabular-nums">
              P{reverseRace?.position}
            </span>
          </motion.div>

          {/* Feature */}
          <motion.div variants={fadeInUp} className="border-t border-[#101010]/10 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#101010]/40 block mb-1">
              FEATURE
            </span>
            <span className="font-data text-xl text-[#101010]/70 tabular-nums">
              P{featureRace?.position}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
