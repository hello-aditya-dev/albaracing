'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { copy } from '@/content/copy';
import { fadeInUp, staggerContainer } from '@/lib/motion';

/* ── Illustrative SVG Charts ── */

function SleepChart() {
  return (
    <svg viewBox="0 0 200 60" fill="none" className="w-full h-12" aria-hidden="true">
      {/* Sleep stages — illustrative hypnogram */}
      <line x1="0" y1="10" x2="200" y2="10" stroke="#D4CEC4" strokeWidth="0.5" />
      <line x1="0" y1="30" x2="200" y2="30" stroke="#D4CEC4" strokeWidth="0.5" />
      <line x1="0" y1="50" x2="200" y2="50" stroke="#D4CEC4" strokeWidth="0.5" />
      <polyline
        points="0,50 12,50 12,30 24,30 24,50 36,50 36,10 48,10 48,30 60,30 60,50 72,50 72,30 84,30 84,10 96,10 96,50 108,50 108,30 120,30 120,50 132,50 132,10 144,10 144,30 156,30 156,50 168,50 168,30 180,30 180,50 192,50 200,50"
        stroke="#86C8E8"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Awake / REM / Deep labels */}
      <text x="204" y="13" fontSize="5" fill="#6B6560" fontFamily="IBM Plex Mono, monospace">AWAKE</text>
      <text x="204" y="33" fontSize="5" fill="#6B6560" fontFamily="IBM Plex Mono, monospace">REM</text>
      <text x="204" y="53" fontSize="5" fill="#6B6560" fontFamily="IBM Plex Mono, monospace">DEEP</text>
    </svg>
  );
}

function RecoveryChart() {
  return (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12" aria-hidden="true">
      {/* Recovery arc / gauge */}
      <path d="M 15 50 A 35 35 0 0 1 85 50" stroke="#D4CEC4" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 15 50 A 35 35 0 0 1 72 22" stroke="#86C8E8" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Tick marks */}
      <line x1="15" y1="50" x2="15" y2="54" stroke="#D4CEC4" strokeWidth="0.5" />
      <line x1="50" y1="15" x2="50" y2="19" stroke="#D4CEC4" strokeWidth="0.5" />
      <line x1="85" y1="50" x2="85" y2="54" stroke="#D4CEC4" strokeWidth="0.5" />
      {/* Value indicator */}
      <text x="50" y="44" textAnchor="middle" fontSize="8" fill="#101010" fontFamily="IBM Plex Mono, monospace" fontWeight="600">67%</text>
    </svg>
  );
}

function StrainChart() {
  return (
    <svg viewBox="0 0 200 60" fill="none" className="w-full h-12" aria-hidden="true">
      {/* Strain bar segments */}
      {[
        { x: 10, h: 24 },
        { x: 30, h: 36 },
        { x: 50, h: 18 },
        { x: 70, h: 42 },
        { x: 90, h: 30 },
        { x: 110, h: 48 },
        { x: 130, h: 20 },
        { x: 150, h: 38 },
        { x: 170, h: 28 },
      ].map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={56 - bar.h}
          width="12"
          height={bar.h}
          fill={i < 6 ? '#86C8E8' : '#D4CEC4'}
          opacity={i < 6 ? 0.7 + i * 0.05 : 0.4}
          rx="1"
        />
      ))}
      {/* Baseline */}
      <line x1="5" y1="56" x2="190" y2="56" stroke="#D4CEC4" strokeWidth="0.5" />
    </svg>
  );
}

function FocusChart() {
  return (
    <svg viewBox="0 0 200 60" fill="none" className="w-full h-12" aria-hidden="true">
      {/* Focus waveform — illustrative EEG-style */}
      <path
        d="M0,30 Q10,30 15,18 Q20,6 25,30 Q30,54 35,30 Q40,10 45,30 Q50,50 55,30 Q60,20 65,30 Q70,42 75,30 Q80,14 85,30 Q90,48 95,30 Q100,22 105,30 Q110,38 115,30 Q120,12 125,30 Q130,52 135,30 Q140,16 145,30 Q150,46 155,30 Q160,24 165,30 Q170,40 175,30 Q180,18 185,30 Q190,44 195,30 L200,30"
        stroke="#86C8E8"
        strokeWidth="1"
        fill="none"
      />
      {/* Centre line */}
      <line x1="0" y1="30" x2="200" y2="30" stroke="#D4CEC4" strokeWidth="0.3" strokeDasharray="2 2" />
    </svg>
  );
}

/* ── Signal Module ── */

interface SignalModuleProps {
  title: string;
  chart: React.ReactNode;
  description: string;
  delay: number;
}

function SignalModule({ title, chart, description, delay }: SignalModuleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col gap-3 p-4 rounded-sm border border-[#E5DFD5]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="font-data text-xs tracking-widest text-[#6B6560] uppercase">{title}</span>
      <div className="flex items-center justify-center py-2">
        {chart}
      </div>
      <p className="text-xs text-[#6B6560] leading-relaxed" aria-label={description}>
        {description}
      </p>
    </motion.div>
  );
}

/* ── Performance Section ── */

export default function PerformanceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const signals = [
    {
      title: 'SLEEP',
      chart: <SleepChart />,
      description: 'Hours and stages of overnight rest, illustrative only.',
    },
    {
      title: 'RECOVERY',
      chart: <RecoveryChart />,
      description: 'Readiness signal based on physiological recovery, illustrative only.',
    },
    {
      title: 'STRAIN',
      chart: <StrainChart />,
      description: 'Cardiovascular and muscular load across the day, illustrative only.',
    },
    {
      title: 'FOCUS',
      chart: <FocusChart />,
      description: 'Cognitive readiness and alertness patterns, illustrative only.',
    },
  ];

  return (
    <section
      id="performance"
      ref={ref}
      className="relative bg-[#FAF8F2] px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24"
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
          {copy.performanceHeadline}
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={fadeInUp}
          className="mt-4 sm:mt-6 font-editorial text-base sm:text-lg text-[#101010] max-w-2xl leading-relaxed"
        >
          {copy.performanceBody}
        </motion.p>

        {/* WHOOP context label */}
        <motion.span
          variants={fadeInUp}
          className="inline-block mt-3 font-data text-[10px] tracking-widest text-[#86C8E8] uppercase"
        >
          WHOOP — THREE-YEAR PARTNERSHIP
        </motion.span>

        {/* Signal grid */}
        <motion.div
          variants={staggerContainer}
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {signals.map((signal, i) => (
            <SignalModule
              key={signal.title}
              title={signal.title}
              chart={signal.chart}
              description={signal.description}
              delay={i * 100}
            />
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 sm:mt-10 font-data text-[10px] text-[#6B6560] tracking-wider"
        >
          {copy.performanceFootnote}
        </motion.p>
      </motion.div>

      {/* Text equivalent for accessibility */}
      <div className="sr-only">
        <p>Performance section: Human Telemetry. Four illustrative signals — Sleep showing overnight rest stages, Recovery showing physiological readiness gauge, Strain showing daily cardiovascular load, and Focus showing cognitive alertness patterns. All charts are illustrative. No private biometric values are displayed.</p>
      </div>
    </section>
  );
}
