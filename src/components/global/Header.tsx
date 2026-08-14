'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'RACE', href: '#race' },
  { label: 'WORLD', href: '#world' },
  { label: 'PERFORMANCE', href: '#performance' },
  { label: 'G.I.R.L.', href: '#girl' },
] as const

const SCROLL_THRESHOLD = 100

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Scroll listener for backdrop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    // Check initial
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleNavClick = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-alba-paper/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(229,223,213,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between h-14 sm:h-16 px-5 sm:px-8 lg:px-12">
          {/* Wordmark */}
          <a
            href="#hero"
            className="font-display text-lg sm:text-xl font-bold tracking-tight text-alba-ink select-none"
            aria-label="Scroll to top"
          >
            ALBA
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-xs font-semibold tracking-widest text-alba-ink/70 hover:text-alba-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-alba-baby-blue focus-visible:outline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-sm hover:bg-alba-ink/5 transition-colors focus-visible:outline-2 focus-visible:outline-alba-baby-blue focus-visible:outline-offset-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-alba-ink" />
            ) : (
              <Menu className="w-5 h-5 text-alba-ink" />
            )}
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-alba-paper flex flex-col items-center justify-center md:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : i * 0.08,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-alba-ink hover:text-alba-red transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-alba-baby-blue focus-visible:outline-offset-4"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
