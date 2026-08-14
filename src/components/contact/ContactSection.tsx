'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { copy } from '@/content/copy';
import { profile } from '@/content/profile';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#101010] px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto"
      >
        {/* Section label */}
        <motion.h2
          variants={fadeInUp}
          className="font-data text-[10px] sm:text-xs tracking-[0.2em] text-[#FAF8F2]/40 uppercase"
        >
          {copy.contactHeadline}
        </motion.h2>

        {/* Management card */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 sm:mt-8 flex flex-col gap-3 p-5 sm:p-6 rounded-sm border border-[#FAF8F2]/10"
        >
          <span className="font-data text-[10px] tracking-widest text-[#86C8E8] uppercase">
            {copy.contactRole}
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-[#FAF8F2] tracking-tight">
            {copy.contactManager}
          </h3>
          <a
            href={`mailto:${profile.manager.email}`}
            className="inline-flex items-center gap-2 font-data text-sm text-[#FAF8F2]/70 hover:text-[#FAF8F2] transition-colors group"
          >
            <Mail className="w-3.5 h-3.5" />
            {profile.manager.email}
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Secondary routes */}
        <motion.div variants={fadeInUp} className="mt-6 sm:mt-8 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#FAF8F2]/20" />
            <span className="font-data text-[10px] sm:text-xs tracking-widest text-[#FAF8F2]/40 uppercase">
              {copy.contactPress}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#FAF8F2]/20" />
            <span className="font-data text-[10px] sm:text-xs tracking-widest text-[#FAF8F2]/40 uppercase">
              {copy.contactPartnerships}
            </span>
          </div>
        </motion.div>

        {/* Minor note */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 sm:mt-10 font-editorial text-xs sm:text-sm text-[#FAF8F2]/30 leading-relaxed max-w-md"
        >
          Professional enquiries route through adult management.
        </motion.p>

        {/* Concept note */}
        <motion.p
          variants={fadeInUp}
          className="mt-3 font-data text-[9px] sm:text-[10px] text-[#FAF8F2]/20 tracking-wider"
        >
          No live submission form — concept mode. No unnecessary data collection.
        </motion.p>
      </motion.div>
    </section>
  );
}
