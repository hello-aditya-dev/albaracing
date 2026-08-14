'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { copy } from '@/content/copy';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { ExternalLink, Users, Gamepad2, Eye, Heart } from 'lucide-react';

const programmeIcons: Record<string, React.ReactNode> = {
  'Track Days': <Users className="w-4 h-4" />,
  'Sim Racing': <Gamepad2 className="w-4 h-4" />,
  'Watch Parties': <Eye className="w-4 h-4" />,
  'Mentorship': <Heart className="w-4 h-4" />,
};

export default function GirlSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="girl"
      ref={ref}
      className="relative bg-[#F1E7D2] px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24"
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
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#101010] tracking-tight"
        >
          {copy.girlHeadline}
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={fadeInUp}
          className="mt-4 sm:mt-6 font-editorial text-base sm:text-lg text-[#101010] max-w-2xl leading-relaxed"
        >
          {copy.girlBody}
        </motion.p>

        {/* Proof points */}
        <motion.div
          variants={staggerContainer}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* 400+ proof point */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-1">
            <span className="font-data text-4xl sm:text-5xl md:text-6xl text-[#101010] font-semibold tabular-nums">
              400+
            </span>
            <span className="font-data text-[10px] sm:text-xs tracking-widest text-[#6B6560] uppercase leading-snug">
              Girls and young women engaged in Denmark by Dec 2025
            </span>
          </motion.div>

          {/* 15,000 proof point */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-1">
            <span className="font-data text-4xl sm:text-5xl md:text-6xl text-[#101010] font-semibold tabular-nums">
              15,000
            </span>
            <span className="font-data text-[10px] sm:text-xs tracking-widest text-[#6B6560] uppercase leading-snug">
              Global 2026 participation goal
            </span>
          </motion.div>
        </motion.div>

        {/* Programme modules */}
        <motion.div
          variants={staggerContainer}
          className="mt-10 sm:mt-12"
        >
          <motion.span
            variants={fadeInUp}
            className="font-data text-[10px] tracking-widest text-[#6B6560] uppercase"
          >
            Programme modules
          </motion.span>
          <motion.div
            variants={staggerContainer}
            className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {copy.girlProgrammes.map((programme) => (
              <motion.div
                key={programme}
                variants={fadeInUp}
                className="flex items-center gap-2.5 p-3 rounded-sm border border-[#101010]/10 bg-[#F1E7D2]"
              >
                <span className="text-[#101010]/60">
                  {programmeIcons[programme] ?? <Users className="w-4 h-4" />}
                </span>
                <span className="font-display text-sm text-[#101010]">{programme}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Community imagery placeholder */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 sm:mt-12 w-full h-40 sm:h-48 rounded-sm asset-placeholder flex items-center justify-center"
        >
          <span className="font-data text-[10px] tracking-widest text-[#6B6560] uppercase">
            Community-first imagery placeholder
          </span>
        </motion.div>

        {/* CTA button */}
        <motion.div variants={fadeInUp} className="mt-8 sm:mt-10">
          <a
            href={copy.girlCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#101010] text-[#FAF8F2] font-display text-sm rounded-sm hover:bg-[#101010]/90 transition-colors"
          >
            {copy.girlCtaText}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
