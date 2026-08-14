'use client';

import { copy } from '@/content/copy';

const navLinks = [
  { label: 'RACE', href: '#race' },
  { label: 'WORLD', href: '#world' },
  { label: 'PERFORMANCE', href: '#performance' },
  { label: 'G.I.R.L.', href: '#girl' },
  { label: 'PRESS', href: '#press' },
  { label: 'PARTNERS', href: '#partners' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#101010] px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 mt-auto">
      <div className="max-w-5xl mx-auto">
        {/* Navigation links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-4 gap-y-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-data text-[10px] sm:text-xs tracking-widest text-[#FAF8F2]/40 hover:text-[#FAF8F2]/70 uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="mt-6 h-px bg-[#FAF8F2]/10" />

        {/* Disclosure */}
        <p className="mt-4 font-editorial text-[10px] sm:text-xs text-[#F1E7D2]/30 leading-relaxed max-w-2xl">
          {copy.disclosure}
        </p>

        {/* Bottom row */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="font-data text-[10px] text-[#FAF8F2]/20 tracking-wider">
            © 2026 / CONCEPT
          </span>
          <span className="font-data text-[10px] text-[#FAF8F2]/20 tracking-wider">
            Data snapshot: 14 Aug 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
