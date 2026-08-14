'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { copy } from '@/content/copy';
import { season2026 } from '@/content/season-2026';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function ShanghaiSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Derive from season data
  const shanghai = season2026.rounds.find((r) => r.venue === 'Shanghai');
  const qualPosition = shanghai?.qualifying?.position;
  const qualTime = shanghai?.qualifying?.time;
  const featureRace = shanghai?.races.find((r) => r.name === 'Feature Race');

  return (
    <section
      id="shanghai"
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
          {copy.shanghaiKicker}
        </motion.span>

        {/* Display headline */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.08 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-[#101010] leading-[1.05] tracking-tight mb-6"
        >
          {copy.shanghaiDisplay}
        </motion.h3>

        {/* Body text */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.16 }}
          className="text-base text-[#101010]/70 max-w-xl leading-relaxed mb-10 md:mb-14"
        >
          {copy.shanghaiBody}
        </motion.p>

        {/* Data strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-x-8 gap-y-4 mb-10 md:mb-14"
        >
          {/* Qualifying */}
          <motion.div variants={fadeInUp} className="border-t border-[#101010]/10 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#101010]/40 block mb-1">
              QUALIFYING
            </span>
            <span className="font-data text-xl text-[#F22316] tabular-nums">
              P{qualPosition}
            </span>
            {qualTime && (
              <span className="font-data text-sm text-[#101010]/50 ml-2 tabular-nums">
                {qualTime}
              </span>
            )}
          </motion.div>

          {/* Feature */}
          <motion.div variants={fadeInUp} className="border-t border-[#101010]/10 pt-3">
            <span className="font-data text-[10px] uppercase tracking-wider text-[#101010]/40 block mb-1">
              FEATURE
            </span>
            <span className="font-data text-xl text-[#101010] tabular-nums">
              P{featureRace?.position}
            </span>
          </motion.div>
        </motion.div>

        {/* Asset placeholder */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="asset-placeholder w-full h-48 md:h-64 rounded-sm flex items-center justify-center"
        >
          <span className="font-data text-[10px] uppercase tracking-widest text-[#101010]/25">
            Shanghai / Asset Placeholder
          </span>
        </motion.div>
      </div>
    </section>
  );
}
