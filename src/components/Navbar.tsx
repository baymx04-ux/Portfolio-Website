'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border py-3'
          : 'bg-background/80 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Monogram & Title */}
        <Link href="#hero" className="flex items-center gap-space-3 group">
          <div className="w-8 h-8 rounded-[2px] bg-surface border border-border flex items-center justify-center font-code-sm font-bold text-pine group-hover:border-pine transition-colors">
            JK
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-[19px] font-semibold text-ink tracking-tight group-hover:text-pine transition-colors">
              Junaid Kanwar
            </span>
            <span className="font-code-sm text-[11px] text-ink-muted -mt-1 hidden sm:inline">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links (Completely clean of any admin presence) */}
        <nav className="hidden md:flex items-center gap-space-8">
          <a
            href="#about"
            className="font-label-md text-label-md text-ink hover:text-pine transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="font-label-md text-label-md text-ink hover:text-pine transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="font-label-md text-label-md text-ink hover:text-pine transition-colors"
          >
            Projects
          </a>
          <a
            href="#timeline"
            className="font-label-md text-label-md text-ink hover:text-pine transition-colors"
          >
            Timeline
          </a>
          <a
            href="#contact"
            className="font-label-md text-label-md text-ink hover:text-pine transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-space-4">
          <a
            href="mailto:junaidkanwar04@gmail.com"
            className="inline-flex items-center gap-2 bg-pine text-surface-container-lowest font-body-sm text-[14px] font-semibold px-4 py-2 rounded-[2px] hover:bg-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Get in touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink hover:text-pine transition-colors"
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
          className="md:hidden bg-surface border-b border-border px-6 py-6 flex flex-col gap-4"
        >
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body-md text-ink hover:text-pine py-1 border-b border-border/50"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body-md text-ink hover:text-pine py-1 border-b border-border/50"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body-md text-ink hover:text-pine py-1 border-b border-border/50"
          >
            Projects
          </a>
          <a
            href="#timeline"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body-md text-ink hover:text-pine py-1 border-b border-border/50"
          >
            Timeline
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body-md text-ink hover:text-pine py-1 border-b border-border/50"
          >
            Contact
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="mailto:junaidkanwar04@gmail.com"
              className="w-full text-center bg-pine text-surface-container-lowest font-body-sm font-semibold py-2.5 rounded-[2px]"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
