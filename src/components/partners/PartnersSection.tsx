'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { copy } from '@/content/copy';
import { partners } from '@/content/partners';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { ArrowUpRight, Mail } from 'lucide-react';

/** Determine accent color for specific partners */
function getPartnerAccent(name: string): { border: string; text: string } {
  if (name.toLowerCase().includes('ferrari')) {
    return { border: 'border-[#F22316]/40', text: 'text-[#F22316]' };
  }
  if (name === 'WHOOP') {
    return { border: 'border-[#101010]/30', text: 'text-[#101010]' };
  }
  return { border: 'border-[#E5DFD5]', text: 'text-[#101010]' };
}

export default function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="partners"
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
          {copy.partnersHeadline}
        </motion.h2>

        {/* Partner cards grid */}
        <motion.div
          variants={staggerContainer}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {partners.map((partner) => {
            const accent = getPartnerAccent(partner.name);
            return (
              <motion.div
                key={partner.name}
                variants={fadeInUp}
                className={`flex flex-col gap-2 p-5 sm:p-6 rounded-sm border ${accent.border} bg-[#FAF8F2]`}
              >
                <h3 className={`font-display text-base sm:text-lg ${accent.text} leading-snug`}>
                  {partner.name}
                </h3>
                <p className="font-editorial text-sm text-[#6B6560] leading-relaxed">
                  {partner.relationship}
                </p>
                {partner.current && (
                  <span className="mt-auto pt-2 font-data text-[9px] tracking-widest text-[#86C8E8] uppercase">
                    Current
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="mt-10 sm:mt-12">
          <a
            href={`mailto:${copy.contactEmail}`}
            className="inline-flex items-center gap-2 font-display text-sm sm:text-base text-[#101010] hover:text-[#101010]/70 transition-colors group"
          >
            <Mail className="w-4 h-4" />
            {copy.partnersCta}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
