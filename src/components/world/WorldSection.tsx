'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { copy } from '@/content/copy'
import { useIsMobile } from '@/hooks/use-mobile'

interface EditorialCard {
  publication: string
  date: string
  bgClass: string
  assetKey: string
}

const editorialCards: EditorialCard[] = [
  {
    publication: 'VOGUE SCANDINAVIA',
    date: '2025',
    bgClass: 'bg-[#F1E7D2]',
    assetKey: 'vogue-scandinavia-2025',
  },
  {
    publication: 'TEEN VOGUE',
    date: '2025',
    bgClass: 'bg-[#FAF8F2]',
    assetKey: 'teen-vogue-2025',
  },
  {
    publication: 'TOMMY JEANS',
    date: 'SPRING 2026',
    bgClass: 'bg-[#F1E7D2]',
    assetKey: 'tommy-jeans-spring-2026',
  },
]

const marginaliaLabels = copy.worldStyleLabels

/** Slower editorial transition duration (ms) */
const editorialTransition = { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }

export default function WorldSection() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      id="world"
      className="relative w-full bg-[#F1E7D2] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto px-8 md:px-18 lg:px-[72px]">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={editorialTransition}
          className="font-editorial text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#101010] mb-6"
        >
          {copy.worldHeadline}
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...editorialTransition, delay: 0.15 }}
          className="font-editorial text-lg md:text-xl text-[#101010]/70 max-w-2xl mb-14"
        >
          {copy.worldBody}
        </motion.p>

        {/* Editorial cards */}
        <div
          className={`
            relative
            ${isMobile
              ? 'flex flex-col gap-8'
              : 'flex flex-row items-start gap-6 lg:gap-8'
            }
          `}
        >
          {editorialCards.map((card, i) => {
            /** Desktop z-offset for slight overlap */
            const desktopOffsets = [
              { x: 0, z: 30 },
              { x: -16, z: 20 },
              { x: -32, z: 10 },
            ]
            const offset = isMobile ? { x: 0, z: 0 } : desktopOffsets[i]

            return (
              <motion.article
                key={card.assetKey}
                initial={{ opacity: 0, y: 36 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.25 + i * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`
                  relative flex-1
                  ${isMobile ? 'w-full' : ''}
                `}
                style={{
                  translateX: offset.x,
                  zIndex: offset.z,
                }}
              >
                <div
                  className={`
                    ${card.bgClass}
                    rounded-lg overflow-hidden
                    transition-shadow duration-700
                    hover:shadow-xl
                  `}
                >
                  {/* Image placeholder */}
                  <div className="asset-placeholder aspect-[3/4] w-full flex flex-col items-center justify-center p-6">
                    {/* Geometric pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.04] pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle, #101010 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Publication name */}
                    <span className="relative font-data text-[10px] tracking-[0.15em] text-[#101010]/40 uppercase mb-2">
                      {card.publication}
                    </span>

                    {/* Date */}
                    <span className="relative font-data text-[10px] tracking-[0.12em] text-[#101010]/30 uppercase mb-6">
                      {card.date}
                    </span>

                    {/* Asset required notice (dev) */}
                    {process.env.NODE_ENV === 'development' && (
                      <span className="relative font-data text-[9px] tracking-wider text-[#F22316]/60 uppercase mt-8">
                        ASSET REQUIRED: {card.assetKey}
                      </span>
                    )}
                  </div>

                  {/* Card footer */}
                  <div className="px-5 py-4 border-t border-[#101010]/8">
                    <span className="font-data text-[10px] tracking-[0.15em] text-[#101010]/50 uppercase">
                      {card.publication}
                    </span>
                    <span className="block font-editorial text-sm text-[#101010]/60 mt-1">
                      {card.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Marginalia / style labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 flex flex-wrap gap-3"
        >
          {marginaliaLabels.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.9 + i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="
                font-editorial italic text-sm
                px-4 py-2 rounded-full
                bg-[#FAF8F2] text-[#101010]
                border border-[#101010]/8
                select-none
              "
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
