'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { copy } from '@/content/copy';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const trajectory = [
  'Roskilde',
  'Karting',
  'Girls on Track',
  'Formula 4',
  'F1 Academy',
  'Ferrari',
];

const widerSystem = ['Performance', 'Fashion', 'G.I.R.L.'];

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const trajectoryRef = useRef<HTMLDivElement>(null);
  const trajectoryInView = useInView(trajectoryRef, { once: true, margin: '-60px' });

  const widerRef = useRef<HTMLDivElement>(null);
  const widerInView = useInView(widerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative bg-[#FAF8F2] py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Display headline */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#101010] leading-[1.05] tracking-tight mb-8 md:mb-12"
        >
          {copy.introDisplay}
        </motion.h2>

        {/* Body text */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.15 }}
          className="text-base md:text-lg text-[#101010]/80 max-w-2xl leading-relaxed mb-16 md:mb-24"
        >
          {copy.introBody}
        </motion.p>

        {/* Trajectory timeline */}
        <div ref={trajectoryRef}>
          {/* Desktop: horizontal */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={trajectoryInView ? 'visible' : 'hidden'}
            className="hidden md:flex items-center gap-0 mb-12"
          >
            {trajectory.map((label, i) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex items-center"
              >
                {/* Dot */}
                <div
                  className={`w-3 h-3 rounded-full shrink-0 ${
                    i === trajectory.length - 1
                      ? 'bg-[#F22316]'
                      : 'bg-[#101010]'
                  }`}
                />
                {/* Label */}
                <span className="font-data text-xs text-[#101010]/70 mx-2 whitespace-nowrap">
                  {label}
                </span>
                {/* Connector line */}
                {i < trajectory.length - 1 && (
                  <div className="w-8 h-px bg-[#101010]/20" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: vertical */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={trajectoryInView ? 'visible' : 'hidden'}
            className="flex md:hidden flex-col gap-3 mb-12"
          >
            {trajectory.map((label, i) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex items-center gap-3"
              >
                {/* Vertical line segment */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                      i === trajectory.length - 1
                        ? 'bg-[#F22316]'
                        : 'bg-[#101010]'
                    }`}
                  />
                  {i < trajectory.length - 1 && (
                    <div className="w-px h-4 bg-[#101010]/20" />
                  )}
                </div>
                <span className="font-data text-xs text-[#101010]/70">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Wider system reveal */}
        <div ref={widerRef}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={widerInView ? 'visible' : 'hidden'}
            className="mb-3"
          >
            <span className="font-data text-[10px] uppercase tracking-widest text-[#101010]/40">
              Around the racing sits a wider world
            </span>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={widerInView ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-3"
          >
            {widerSystem.map((label) => (
              <motion.span
                key={label}
                variants={fadeInUp}
                className="font-data text-sm px-3 py-1.5 border border-[#101010]/15 text-[#101010]/60 rounded-sm hover:border-[#101010]/30 hover:text-[#101010] transition-colors duration-200"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
