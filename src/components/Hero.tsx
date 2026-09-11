'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full pt-20" id="hero">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-space-12 pb-space-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-center">

          {/* Left 7 Columns */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-space-4">
            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-display text-ink tracking-tight mb-space-3">
              Junaid Kanwar
            </h1>
            <p className="font-headline-sm text-headline-sm text-pine font-medium mb-space-4">
              Full-Stack Developer
            </p>

            {/* Bio Paragraph */}
            <p className="font-body-lg text-body-lg text-ink-muted max-w-[560px] mb-space-8 leading-relaxed text-base sm:text-[17px]">
              Computer Science engineer building resilient, high-performance web applications — from decoupled RESTful APIs to containerized Docker environments.
            </p>

            {/* Button Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-space-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-pine text-white font-body-sm text-body-sm font-semibold px-5 sm:px-6 py-3 rounded-[2px] hover:bg-primary transition-colors cursor-pointer"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-transparent border border-border text-ink font-body-sm text-body-sm font-medium px-5 sm:px-6 py-3 rounded-[2px] hover:border-pine hover:text-pine transition-colors cursor-pointer"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/baymx04-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-code-sm text-code-sm text-ink-muted hover:text-ink px-2 sm:px-3 py-3 transition-colors"
              >
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Profile Photo */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="flex flex-col items-center gap-5">

              {/* Circular Photo Container */}
              <div className="relative">
                {/* Outer decorative ring */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-pine/30 flex items-center justify-center">
                  {/* Inner ring */}
                  <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-border bg-surface overflow-hidden shadow-sm">
                    {/*
                      To use your own photo, replace the div below with:
                      <Image src="/profile.jpg" alt="Junaid Kanwar" fill className="object-cover" />
                      and place your photo at: public/profile.jpg
                    */}
                    <div className="w-full h-full flex items-center justify-center bg-surface">
                      <span className="font-display text-5xl sm:text-6xl font-bold text-pine select-none">
                        JK
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability badge — bottom right of circle */}
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-background border border-border px-3 py-1.5 rounded-full shadow-sm font-code-sm text-[11px] text-pine font-semibold">
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pine opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pine"></span>
                  </span>
                  Open to Work
                </span>
              </div>

              {/* Stats row below photo */}
              <div className="flex items-center divide-x divide-border border border-border bg-surface rounded-[2px]">
                <div className="px-5 py-3 text-center">
                  <span className="block font-display text-xl font-bold text-pine">4+</span>
                  <span className="block font-code-sm text-[10px] text-ink-muted uppercase mt-0.5">Projects</span>
                </div>
                <div className="px-5 py-3 text-center">
                  <span className="block font-display text-xl font-bold text-ink">15+</span>
                  <span className="block font-code-sm text-[10px] text-ink-muted uppercase mt-0.5">Technologies</span>
                </div>
                <div className="px-5 py-3 text-center">
                  <span className="block font-display text-xl font-bold text-ink">3+</span>
                  <span className="block font-code-sm text-[10px] text-ink-muted uppercase mt-0.5">Yrs Coding</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
