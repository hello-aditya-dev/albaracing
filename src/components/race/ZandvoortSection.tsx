'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { copy } from '@/content/copy';
import { season2026, zandvoortContext } from '@/content/season-2026';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function ZandvoortSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Derive from season data and zandvoortContext
  const zandvoort = season2026.rounds.find((r) => r.venue === 'Zandvoort');
  const f4Position = zandvoortContext.britishF4Position.value;
  const nextDates = zandvoortContext.nextRaceDates;

  return (
    <section
      id="zandvoort"
      ref={sectionRef}
      className="relative bg-[#101010] py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Kicker with baby blue */}
        <motion.span
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-data text-[10px] uppercase tracking-widest text-[#86C8E8] block mb-4"
        >
          {copy.zandvoortKicker}
        </motion.span>

        {/* Display headline */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.08 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-[#FAF8F2] leading-[1.05] tracking-tight mb-6"
        >
          {copy.zandvoortDisplay}
        </motion.h3>

        {/* Body text — forward-looking */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.16 }}
          className="text-base text-[#FAF8F2]/70 max-w-xl leading-relaxed mb-10 md:mb-14"
        >
          {copy.zandvoortBody}
        </motion.p>

        {/* Data strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-x-8 gap-y-4 mb-10 md:mb-14"
        >
          {/* British F4 */}
          <motion.div variants={fadeInUp} className="border-t border-[#86C8E8]/20 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#FAF8F2]/40 block mb-1">
              BRITISH F4
            </span>
            <span className="font-data text-xl text-[#86C8E8] tabular-nums">
              P{f4Position}
            </span>
          </motion.div>

          {/* F1 Academy upcoming */}
          <motion.div variants={fadeInUp} className="border-t border-[#86C8E8]/20 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#FAF8F2]/40 block mb-1">
              F1 ACADEMY
            </span>
            <span className="font-data text-xl text-[#86C8E8] tabular-nums">
              {nextDates}
            </span>
          </motion.div>
        </motion.div>

        {/* Upcoming race indicator — pulsing border card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="border border-[#86C8E8]/30 rounded-sm p-5 md:p-6 flex items-center gap-4">
            {/* Pulsing dot */}
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86C8E8] opacity-50" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#86C8E8]" />
            </span>
            <div>
              <span className="font-data text-xs uppercase tracking-wider text-[#86C8E8] block">
                Next Race
              </span>
              <span className="font-display text-lg text-[#FAF8F2] mt-0.5 block">
                Zandvoort / {nextDates}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
