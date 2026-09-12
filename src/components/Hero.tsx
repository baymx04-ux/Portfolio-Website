'use client';

import React, { MouseEvent } from 'react';
import { scrollToSection } from '@/lib/scroll';
import { GitHubIcon } from './icons';

export default function Hero() {
  const handleNav = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section className="w-full pt-20 relative overflow-hidden" id="hero">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-accent/20 blur-[140px]"></div>
        <div className="absolute top-1/2 -left-40 w-[440px] h-[440px] rounded-full bg-pine/10 blur-[140px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-space-16 pb-space-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-12 lg:gap-space-8 items-center">

          {/* Left 7 Columns */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-border rounded-full px-4 py-2 mb-space-8 shadow-card">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pine"></span>
              </span>
              <span className="font-code-sm text-code-sm text-ink-muted">
                Available for full-time &amp; freelance
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-display text-ink tracking-tight mb-space-4">
              Junaid Kanwar
            </h1>
            <p className="font-headline-md font-display text-headline-md lg:text-[32px] text-pine mb-space-6 font-medium">
              Full-Stack Developer
            </p>

            {/* Bio Paragraph */}
            <p className="font-body-lg text-body-lg text-ink-muted max-w-[560px] mb-space-10 leading-relaxed">
              Computer Science engineer building resilient, high-performance web applications — from decoupled RESTful APIs to containerized Docker environments.
            </p>

            {/* Button Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-space-4">
              <a
                href="#projects"
                onClick={(e) => handleNav(e, 'projects')}
                className="inline-flex items-center gap-2 justify-center bg-pine text-white font-body-sm text-body-sm font-semibold px-6 sm:px-7 py-3.5 rounded-full hover:bg-primary hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-glow"
              >
                View projects
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNav(e, 'contact')}
                className="inline-flex items-center justify-center bg-white border border-border text-ink font-body-sm text-body-sm font-medium px-6 sm:px-7 py-3.5 rounded-full hover:border-pine hover:text-pine hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-card"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/baymx04-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-code-sm text-code-sm text-ink-muted hover:text-pine px-2 sm:px-3 py-2.5 transition-colors group border border-transparent border-r-0 rounded-full hover:border-pine/25 hover:shadow-card"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Profile Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="flex flex-col items-center gap-6">
              {/* Profile Photo Card */}
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-[32px] bg-gradient-to-br from-pine via-primary to-ink p-[3px]">
                  <div className="w-full h-full rounded-[29px] bg-surface overflow-hidden flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low"></div>
                    <span className="relative font-display text-7xl font-bold text-pine/25 select-none">
                      JK
                    </span>
                  </div>
                </div>

                {/* Open to Work badge */}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-white border border-border px-4 py-2 rounded-full shadow-card-lg font-code-sm text-[12px] text-ink font-semibold whitespace-nowrap">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pine"></span>
                  </span>
                  Open to Work
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-xs mt-4">
                <div className="bg-white border border-border rounded-2xl px-3 py-4 text-center shadow-card">
                  <span className="block font-display text-2xl font-bold text-pine">4+</span>
                  <span className="block font-code-sm text-[10px] text-ink-muted uppercase mt-1">Projects</span>
                </div>
                <div className="bg-white border border-border rounded-2xl px-3 py-4 text-center shadow-card">
                  <span className="block font-display text-2xl font-bold text-ink">15+</span>
                  <span className="block font-code-sm text-[10px] text-ink-muted uppercase mt-1">Technologies</span>
                </div>
                <div className="bg-white border border-border rounded-2xl px-3 py-4 text-center shadow-card">
                  <span className="block font-display text-2xl font-bold text-ink">3+</span>
                  <span className="block font-code-sm text-[10px] text-ink-muted uppercase mt-1">Yrs Coding</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}