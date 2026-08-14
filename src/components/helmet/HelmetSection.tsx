'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { copy } from '@/content/copy'
import { useIsMobile } from '@/hooks/use-mobile'

interface Hotspot {
  id: string
  label: string
  dotColor: string
  /** Desktop position as percentage from top-left of the placeholder */
  positionDesktop: { top: string; left: string }
}

const hotspots: Hotspot[] = [
  {
    id: 'baby-blue',
    label: copy.helmetBabyBlue,
    dotColor: '#86C8E8',
    positionDesktop: { top: '18%', left: '12%' },
  },
  {
    id: 'red-white',
    label: copy.helmetRedWhite,
    dotColor: '#F22316',
    positionDesktop: { top: '18%', left: '78%' },
  },
  {
    id: 'front',
    label: copy.helmetFront,
    dotColor: '#F22316',
    positionDesktop: { top: '72%', left: '18%' },
  },
  {
    id: 'rear',
    label: copy.helmetRear,
    dotColor: '#86C8E8',
    positionDesktop: { top: '72%', left: '72%' },
  },
]

export default function HelmetSection() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const isMobile = useIsMobile()

  const handleHotspotClick = (id: string) => {
    setActiveHotspot(prev => (prev === id ? null : id))
  }

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleHotspotClick(id)
    }
  }

  return (
    <section
      id="helmet"
      className="relative w-full bg-[#FAF8F2] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#101010] mb-6"
        >
          {copy.helmetDisplay}
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-editorial text-lg md:text-xl text-[#101010]/80 max-w-2xl mb-12"
        >
          {copy.helmetBody}
        </motion.p>

        {/* Helmet interaction area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Desktop: hotspots overlaid on placeholder */}
          {!isMobile && (
            <div className="relative">
              {/* Placeholder for helmet image */}
              <div className="asset-placeholder rounded-lg aspect-[4/3] w-full flex items-center justify-center">
                {/* Geometric pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #101010 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                />
                <span className="relative font-data text-sm md:text-base text-[#101010]/40 tracking-wider uppercase">
                  HELMET FRONT VIEW
                </span>
              </div>

              {/* Hotspot dots */}
              {hotspots.map(hs => (
                <div
                  key={hs.id}
                  className="absolute"
                  style={{ top: hs.positionDesktop.top, left: hs.positionDesktop.left }}
                >
                  {/* Touch target (min 44px) */}
                  <button
                    onClick={() => handleHotspotClick(hs.id)}
                    onKeyDown={e => handleKeyDown(e, hs.id)}
                    aria-label={hs.label}
                    aria-pressed={activeHotspot === hs.id}
                    tabIndex={0}
                    className={`
                      relative z-10 flex items-center justify-center
                      w-11 h-11 rounded-full
                      transition-transform duration-200
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010]
                      ${activeHotspot === hs.id ? 'scale-125' : 'hover:scale-110'}
                    `}
                  >
                    {/* Outer ring */}
                    <span
                      className="absolute inset-1 rounded-full border-2 animate-pulse opacity-40"
                      style={{ borderColor: hs.dotColor }}
                    />
                    {/* Inner dot */}
                    <span
                      className="relative w-4 h-4 rounded-full shadow-md"
                      style={{ backgroundColor: hs.dotColor }}
                    />
                  </button>

                  {/* Annotation line + label */}
                  <AnimatePresence>
                    {activeHotspot === hs.id && (
                      <motion.div
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, x: 20, y: -8 }}
                        exit={{ opacity: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute top-1/2 left-full -translate-y-1/2 pointer-events-none"
                      >
                        {/* Connector line */}
                        <svg
                          width="28"
                          height="2"
                          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full"
                        >
                          <line
                            x1="0"
                            y1="1"
                            x2="28"
                            y2="1"
                            stroke={hs.dotColor}
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span
                          className="font-data text-xs md:text-sm whitespace-nowrap px-2 py-1 rounded bg-[#FAF8F2]/90 backdrop-blur-sm shadow-sm"
                          style={{ color: '#101010' }}
                        >
                          {hs.label}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {/* Mobile: placeholder + list of hotspots below */}
          {isMobile && (
            <>
              {/* Placeholder for helmet image */}
              <div className="asset-placeholder rounded-lg aspect-[4/3] w-full flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #101010 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                />
                <span className="relative font-data text-sm text-[#101010]/40 tracking-wider uppercase">
                  HELMET FRONT VIEW
                </span>
              </div>

              {/* Hotspot list */}
              <div className="mt-6 flex flex-col gap-3">
                {hotspots.map(hs => (
                  <button
                    key={hs.id}
                    onClick={() => handleHotspotClick(hs.id)}
                    onKeyDown={e => handleKeyDown(e, hs.id)}
                    aria-label={hs.label}
                    aria-pressed={activeHotspot === hs.id}
                    tabIndex={0}
                    className={`
                      flex items-center gap-3 w-full min-h-[44px] px-4 py-3
                      rounded-lg border transition-all duration-200
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010]
                      ${activeHotspot === hs.id
                        ? 'border-[#101010]/20 bg-[#101010]/5'
                        : 'border-transparent hover:bg-[#101010]/[0.03]'
                      }
                    `}
                  >
                    {/* Dot indicator */}
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full shadow-sm"
                      style={{ backgroundColor: hs.dotColor }}
                    />
                    {/* Label */}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={activeHotspot === hs.id ? 'active' : 'inactive'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-data text-sm text-[#101010]"
                      >
                        {hs.label}
                      </motion.span>
                    </AnimatePresence>
                    {/* Active indicator */}
                    {activeHotspot === hs.id && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto font-data text-xs text-[#101010]/50"
                      >
                        ACTIVE
                      </motion.span>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
