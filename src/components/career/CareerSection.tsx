'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { copy } from '@/content/copy'
import { careerTimeline } from '@/content/career'
import { useIsMobile } from '@/hooks/use-mobile'

/** Whether this milestone is the Ferrari one */
const isFerrari = (label: string) => label.toLowerCase() === 'ferrari'

/** Whether this milestone is the open-ended "NEXT" */
const isNext = (year: string) => year === 'NEXT'

export default function CareerSection() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={sectionRef}
      id="career"
      className="relative w-full bg-[#101010] py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#FAF8F2] mb-4"
        >
          {copy.careerDisplay}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-editorial text-lg md:text-xl text-[#FAF8F2]/70 mb-12"
        >
          {copy.careerBody}
        </motion.p>
      </div>

      {/* Mobile: vertical timeline */}
      {isMobile && (
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-[#FAF8F2]/15" />

            {careerTimeline.map((milestone, i) => {
              const next = isNext(milestone.year)
              const ferrari = isFerrari(milestone.label)

              return (
                <motion.div
                  key={`${milestone.year}-${milestone.label}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Node dot */}
                  <div
                    className={`
                      absolute -left-8 top-1.5 w-6 h-6 rounded-full
                      flex items-center justify-center
                      ${next ? 'border-2 border-dashed border-[#FAF8F2]/30 bg-transparent' : 'bg-[#FAF8F2]/20'}
                      ${ferrari ? 'ring-2 ring-[#F22316]' : ''}
                    `}
                  >
                    {!next && (
                      <span
                        className={`w-2 h-2 rounded-full ${ferrari ? 'bg-[#F22316]' : 'bg-[#FAF8F2]/60'}`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={next ? 'opacity-40' : ''}>
                    <span className="font-data text-xs text-[#FAF8F2]/50 block mb-1">
                      {milestone.year}
                    </span>
                    <h3
                      className={`font-display text-base font-semibold mb-1 ${ferrari ? 'text-[#F22316]' : 'text-[#FAF8F2]'}`}
                    >
                      {milestone.label}
                    </h3>
                    {milestone.text && (
                      <p className="font-editorial text-sm text-[#FAF8F2]/60 leading-relaxed">
                        {milestone.text}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}

      {/* Desktop: horizontal scroll-linked timeline */}
      {!isMobile && (
        <div className="mt-4">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory pb-6 px-6 md:px-10 lg:px-16 gap-0
              scrollbar-thin scrollbar-thumb-[#FAF8F2]/20 scrollbar-track-transparent"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(250,248,242,0.2) transparent',
            }}
          >
            {careerTimeline.map((milestone, i) => {
              const next = isNext(milestone.year)
              const ferrari = isFerrari(milestone.label)
              const isLast = i === careerTimeline.length - 1

              return (
                <motion.div
                  key={`${milestone.year}-${milestone.label}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex flex-shrink-0 snap-start"
                >
                  {/* Card */}
                  <div className="flex flex-col items-center w-48 md:w-56 lg:w-64">
                    {/* Node */}
                    <div
                      className={`
                        relative w-10 h-10 rounded-full flex items-center justify-center mb-4
                        ${next
                          ? 'border-2 border-dashed border-[#FAF8F2]/30 bg-transparent'
                          : 'bg-[#FAF8F2]/10'
                        }
                        ${ferrari ? 'ring-2 ring-[#F22316]' : ''}
                      `}
                    >
                      {!next && (
                        <span
                          className={`w-3 h-3 rounded-full ${ferrari ? 'bg-[#F22316]' : 'bg-[#FAF8F2]/50'}`}
                        />
                      )}
                    </div>

                    {/* Year */}
                    <span className="font-data text-xs text-[#FAF8F2]/50 mb-1">
                      {milestone.year}
                    </span>

                    {/* Label */}
                    <h3
                      className={`
                        font-display text-sm md:text-base font-semibold text-center mb-2
                        ${ferrari ? 'text-[#F22316]' : 'text-[#FAF8F2]'}
                        ${next ? 'opacity-40' : ''}
                      `}
                    >
                      {milestone.label}
                    </h3>

                    {/* Text on hover (expand area) */}
                    {milestone.text && (
                      <p className="font-editorial text-xs md:text-sm text-[#FAF8F2]/50 text-center leading-relaxed max-w-[200px]">
                        {milestone.text}
                      </p>
                    )}

                    {/* Open-ended fade hint */}
                    {next && (
                      <span className="font-data text-[10px] text-[#FAF8F2]/20 mt-2 tracking-widest">
                        ───
                      </span>
                    )}
                  </div>

                  {/* Horizontal connector line to next milestone */}
                  {!isLast && (
                    <div className="flex items-start pt-[18px]">
                      <div
                        className={`w-12 md:w-16 lg:w-20 h-px ${next ? 'border-t border-dashed border-[#FAF8F2]/15' : 'bg-[#FAF8F2]/15'}`}
                      />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-2 mt-2 text-[#FAF8F2]/30"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="animate-pulse"
            >
              <path
                d="M4 10H16M16 10L11 5M16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-data text-[10px] tracking-widest uppercase">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      )}
    </section>
  )
}
