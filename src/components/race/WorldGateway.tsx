'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { copy } from '@/content/copy';
import { fadeInUp, staggerContainer } from '@/lib/motion';

interface GatewayCard {
  label: string;
  short: string;
  cta: string;
  bg: string;
  textColor: string;
  accentColor: string;
  borderHover: string;
}

const cards: GatewayCard[] = [
  {
    label: copy.raceDisplay,
    short: copy.raceShort,
    cta: copy.raceCta,
    bg: 'bg-[#101010]',
    textColor: 'text-[#FAF8F2]',
    accentColor: 'text-[#FAF8F2]',
    borderHover: 'border-[#FAF8F2]/30',
  },
  {
    label: copy.worldDisplay,
    short: copy.worldShort,
    cta: copy.worldCta,
    bg: 'bg-[#F1E7D2]',
    textColor: 'text-[#101010]',
    accentColor: 'text-[#101010]',
    borderHover: 'border-[#101010]/30',
  },
  {
    label: copy.performanceDisplay,
    short: copy.performanceShort,
    cta: copy.performanceCta,
    bg: 'bg-[#101010]',
    textColor: 'text-[#86C8E8]',
    accentColor: 'text-[#86C8E8]',
    borderHover: 'border-[#86C8E8]/40',
  },
  {
    label: copy.girlDisplay,
    short: copy.girlShort,
    cta: copy.girlCta,
    bg: 'bg-[#F1E7D2]',
    textColor: 'text-[#101010]',
    accentColor: 'text-[#F22316]',
    borderHover: 'border-[#F22316]/40',
  },
];

export default function WorldGateway() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="worlds"
      ref={sectionRef}
      className="relative bg-[#FAF8F2] py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {cards.map((card) => (
            <motion.div
              key={card.label}
              variants={fadeInUp}
              className={`
                group relative ${card.bg} ${card.textColor}
                min-h-[200px] md:min-h-[240px]
                rounded-sm p-6 md:p-8
                border border-transparent
                transition-all duration-300 ease-out
                hover:scale-[1.02] hover:${card.borderHover}
                focus-within:scale-[1.02] focus-within:${card.borderHover}
                cursor-pointer
                flex flex-col justify-between
              `}
            >
              {/* Card label */}
              <span className="font-data text-[10px] uppercase tracking-widest opacity-50 mb-3">
                {card.label}
              </span>

              {/* Editorial short text */}
              <p className={`font-editorial text-xl md:text-2xl leading-snug mb-6 ${card.accentColor}`}>
                {card.short}
              </p>

              {/* CTA link */}
              <span
                className={`
                  font-data text-xs uppercase tracking-wider
                  opacity-0 group-hover:opacity-70
                  group-focus-within:opacity-70
                  transition-opacity duration-300
                `}
              >
                {card.cta}
              </span>

              {/* Bottom border reveal on hover */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0 h-px
                  ${card.borderHover}
                  scale-x-0 group-hover:scale-x-100
                  group-focus-within:scale-x-100
                  transition-transform duration-500 ease-out origin-left
                `}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
