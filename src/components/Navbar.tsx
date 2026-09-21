'use client';

import React, { useState, useEffect, MouseEvent } from 'react';
import Image from 'next/image';
import { scrollToSection, scrollToTop } from '@/lib/scroll';
import pfp from '../../images/pfp.png';

const desktopItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'hero') {
      scrollToTop();
    } else {
      scrollToSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.2)] py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Monogram & Title */}
        <a href="#hero" onClick={(e) => handleNav(e, 'hero')} className="flex items-center gap-space-3 group cursor-pointer">
          <div className="relative w-9 h-9 rounded-full bg-pine overflow-hidden flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
            <Image
              src={pfp}
              alt="Junaid Kanwar profile photo"
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-[17px] font-semibold text-ink tracking-tight group-hover:text-pine transition-colors">
              Junaid Kanwar
            </span>
            <span className="font-code-sm text-[11px] text-ink-muted -mt-0.5 hidden sm:inline">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-space-8">
          {desktopItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              className="relative font-label-md text-label-md text-ink-muted hover:text-ink transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-pine after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-space-4">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, 'contact')}
            className="inline-flex items-center gap-2 bg-pine text-black font-body-sm text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            <span>Get in touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-ink hover:bg-surface transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="material-symbols-outlined text-[24px]">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border px-6 pt-4 pb-6 flex flex-col gap-1 shadow-card"
        >
          {desktopItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              className="font-body-md text-ink hover:text-pine py-2.5 border-b border-border/60"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, 'contact')}
            className="mt-3 w-full text-center bg-pine text-black font-body-sm font-semibold py-3 rounded-full hover:bg-primary transition-colors"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}