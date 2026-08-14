'use client'

import { useState, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { copy } from '@/content/copy'

const STORAGE_KEY = 'alba-disclosure-dismissed'

/** Read localStorage safely (SSR-safe) */
function getSnapshot(): string {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem(STORAGE_KEY) ?? ''
}

function getServerSnapshot(): string {
  return ''
}

function subscribe(): () => void {
  // No-op: storage events come from other tabs; we don't need live sync
  return () => {}
}

export default function ConceptDisclosure() {
  const storedValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [dismissed, setDismissed] = useState(false)

  // Sync from storage on first render
  const isDismissed = dismissed || storedValue === 'true'

  // Only show in concept mode
  const isConcept = process.env.NEXT_PUBLIC_SITE_MODE !== 'official'
  if (!isConcept) return null

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden bg-alba-ink text-alba-paper"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-2 sm:px-6">
            <p className="font-data text-[10px] leading-tight sm:text-xs">
              {copy.disclosure}
            </p>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-sm hover:bg-alba-paper/10 transition-colors focus-visible:outline-2 focus-visible:outline-alba-baby-blue focus-visible:outline-offset-2"
              aria-label="Dismiss disclosure banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
