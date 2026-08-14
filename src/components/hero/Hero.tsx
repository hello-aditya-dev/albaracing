'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { copy } from '@/content/copy'

/**
 * Hero — the signature visual moment.
 * Desktop: asymmetric editorial layout (40/60 text/image).
 * Mobile: stacked vertical with oversized typography.
 */

const WORD_REVEAL_DURATION = 0.7
const WORD_REVEAL_STAGGER = 0.35 // ~700ms total for two words
const METADATA_STAGGER = 0.14
const METADATA_DELAY = 0.7
const IMAGE_REVEAL_DELAY = 0.8
const IMAGE_REVEAL_DURATION = 0.9

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  // Animation variants
  const wordVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : WORD_REVEAL_DURATION,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const metadataContainerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : METADATA_STAGGER,
        delayChildren: shouldReduceMotion ? 0 : METADATA_DELAY,
      },
    },
  }

  const metadataItemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, clipPath: 'inset(0 0 0 0)' }
      : { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: shouldReduceMotion ? 0 : IMAGE_REVEAL_DURATION,
        delay: shouldReduceMotion ? 0 : IMAGE_REVEAL_DELAY,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-alba-paper overflow-hidden"
    >
      {/* Desktop layout (>=1024px) */}
      <div className="hidden lg:flex w-full min-h-screen">
        {/* Left: Text content — 40% */}
        <div className="w-[40%] flex flex-col justify-center pl-12 xl:pl-20 pr-8 xl:pr-12">
          {/* Eyebrow */}
          <motion.p
            variants={metadataItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
            className="font-display text-[10px] xl:text-xs font-semibold tracking-[0.2em] text-alba-ink/60 uppercase mb-4"
          >
            {copy.heroEyebrow}
          </motion.p>

          {/* Name: ALBA LARSEN */}
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: shouldReduceMotion ? 0 : WORD_REVEAL_STAGGER }}
            className="font-display font-bold tracking-tighter leading-[0.9] mb-5"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            <motion.span variants={wordVariants} className="block">
              ALBA
            </motion.span>
            <motion.span variants={wordVariants} className="block">
              LARSEN
            </motion.span>
          </motion.h1>

          {/* Metadata */}
          <motion.div
            variants={metadataContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2"
          >
            <motion.p variants={metadataItemVariants} className="font-data text-sm xl:text-base text-alba-ink/80">
              {copy.heroMetadata}
            </motion.p>
            <motion.p variants={metadataItemVariants} className="font-data text-sm xl:text-base">
              <span className="text-alba-baby-blue font-semibold">{copy.heroNextRace}</span>
            </motion.p>
            <motion.p variants={metadataItemVariants} className="font-data text-sm xl:text-base text-alba-ink/70">
              {copy.heroSecondary}
            </motion.p>
          </motion.div>
        </div>

        {/* Right: Image placeholder — 60% */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-[60%] min-h-screen asset-placeholder flex items-center justify-center"
        >
          <span className="font-data text-xs text-alba-ink/30 tracking-widest uppercase z-10 relative">
            hero.primary
          </span>
        </motion.div>
      </div>

      {/* Mobile/Tablet layout (<1024px) */}
      <div className="flex lg:hidden flex-col w-full min-h-screen">
        {/* Text content */}
        <div className="flex flex-col justify-center flex-1 px-5 sm:px-8 pt-20 pb-8">
          {/* Eyebrow */}
          <motion.p
            variants={metadataItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: shouldReduceMotion ? 0 : 0.15 }}
            className="font-display text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] text-alba-ink/50 uppercase mb-3"
          >
            {copy.heroEyebrow}
          </motion.p>

          {/* Name: ALBA LARSEN — very large */}
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: shouldReduceMotion ? 0 : WORD_REVEAL_STAGGER }}
            className="font-display font-bold tracking-tighter leading-[0.88] mb-4"
            style={{ fontSize: 'clamp(3.2rem, 14vw, 6rem)' }}
          >
            <motion.span variants={wordVariants} className="block">
              ALBA
            </motion.span>
            <motion.span variants={wordVariants} className="block">
              LARSEN
            </motion.span>
          </motion.h1>

          {/* Metadata */}
          <motion.div
            variants={metadataContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-1.5"
          >
            <motion.p variants={metadataItemVariants} className="font-data text-xs sm:text-sm text-alba-ink/80">
              {copy.heroMetadata}
            </motion.p>
            <motion.p variants={metadataItemVariants} className="font-data text-xs sm:text-sm">
              <span className="text-alba-baby-blue font-semibold">{copy.heroNextRace}</span>
            </motion.p>
            <motion.p variants={metadataItemVariants} className="font-data text-xs sm:text-sm text-alba-ink/60">
              {copy.heroSecondary}
            </motion.p>
          </motion.div>
        </div>

        {/* Image placeholder below */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-full aspect-[4/3] sm:aspect-[16/9] asset-placeholder flex items-center justify-center"
        >
          <span className="font-data text-[10px] sm:text-xs text-alba-ink/25 tracking-widest uppercase z-10 relative">
            hero.primary
          </span>
        </motion.div>
      </div>
    </section>
  )
}
