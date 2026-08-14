'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { copy } from '@/content/copy';
import { season2026 } from '@/content/season-2026';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function CurrentSeason() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Derive data from season2026 (not hardcoded)
  const year = String(season2026.year);
  const series = season2026.series.toUpperCase();
  const team = season2026.team.toUpperCase();
  const support = season2026.supportedBy.toUpperCase();
  const number = `#${season2026.number.value}`;
  const standing = String(season2026.standing.value).padStart(2, '0');
  const points = `${season2026.points.value} PTS`;

  // Find the next round
  const nextRound = season2026.rounds.find((r) => r.status === 'next');
  const nextVenue = nextRound?.venue.toUpperCase() ?? copy.nowNextVenue;
  const nextDate = nextRound
    ? `${nextRound.dateStart.slice(5, 7).replace(/^0/, '')}–${nextRound.dateEnd.slice(8, 10).replace(/^0/, '')} ${nextRound.dateEnd.slice(0, 4) === '2026' ? 'AUG' : ''}`
        .trim()
    : copy.nowNextDate;

  return (
    <section
      id="now"
      ref={sectionRef}
      className="relative bg-[#101010] py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.span
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-data text-[10px] uppercase tracking-widest text-[#FAF8F2]/40 block mb-6"
        >
          {copy.nowDisplay}
        </motion.span>

        {/* Data card */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="border border-[#FAF8F2]/10 rounded-sm p-6 md:p-8"
        >
          {/* Top row: year / series / team / support / number */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-8"
          >
            <span className="font-data text-sm text-[#FAF8F2]/70">{year}</span>
            <span className="font-data text-sm text-[#FAF8F2]/50">/</span>
            <span className="font-data text-sm text-[#FAF8F2]/70">{series}</span>
            <span className="font-data text-sm text-[#FAF8F2]/50">/</span>
            <span className="font-data text-sm text-[#FAF8F2]/70">{team}</span>
            <span className="font-data text-sm text-[#FAF8F2]/50">/</span>
            <span className="font-data text-sm text-[#FAF8F2]/70">{support}</span>
            <span className="font-data text-sm text-[#FAF8F2]/50">/</span>
            <span className="font-data text-sm text-[#F22316] font-semibold">
              {number}
            </span>
          </motion.div>

          {/* Standing + Points — large data numbers */}
          <motion.div
            variants={fadeInUp}
            className="flex items-baseline gap-6 mb-8"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-data text-5xl md:text-7xl text-[#F22316] leading-none tabular-nums">
                {standing}
              </span>
              <span className="font-data text-sm text-[#FAF8F2]/40">/ 24</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-data text-5xl md:text-7xl text-[#F22316] leading-none tabular-nums">
                {season2026.points.value}
              </span>
              <span className="font-data text-sm text-[#FAF8F2]/40">PTS</span>
            </div>
          </motion.div>

          {/* Data snapshot timestamp */}
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <span className="font-data text-[10px] uppercase tracking-wider text-[#FAF8F2]/30">
              {copy.nowDataSnapshot}
            </span>
          </motion.div>

          {/* Next race */}
          <motion.div
            variants={fadeInUp}
            className="flex items-baseline gap-3 border-t border-[#FAF8F2]/10 pt-5"
          >
            <span className="font-data text-[10px] uppercase tracking-wider text-[#FAF8F2]/40">
              NEXT
            </span>
            <span className="font-data text-sm text-[#FAF8F2]/80">{nextVenue}</span>
            <span className="font-data text-sm text-[#FAF8F2]/40">/</span>
            <span className="font-data text-sm text-[#86C8E8]">{copy.nowNextDate}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
