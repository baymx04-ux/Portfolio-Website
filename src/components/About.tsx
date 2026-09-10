'use client';

import React from 'react';

export default function About() {
  return (
    <section className="w-full border-t border-border bg-background py-space-24 scroll-mt-24" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-start">
          {/* Left 7 Columns: Narrative Bio */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-space-2 mb-space-3">
              <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
                01 // About
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-ink mb-space-6 font-display">
              Building efficient web platforms with mechanical discipline.
            </h2>

            <div className="font-body-md text-body-md text-ink space-y-space-4 max-w-[640px] leading-relaxed">
              <p>
                I am a Computer Science student at Air University with an intensive foundation in full-stack web development. I engineer web platforms characterized by low latency, intuitive user interactions, and robust asynchronous backends.
              </p>
              <p>
                My approach emphasizes clarity over unnecessary complexity. Whether modeling decoupled document schemas in MongoDB, crafting type-safe Express middleware, or orchestrating isolated Docker environments for automated code grading, I prioritize software durability, code readability, and reliable error recovery.
              </p>
            </div>

            {/* Profile Detail Badge */}
            <div className="mt-space-8 pt-space-6 border-t border-border flex flex-wrap items-center gap-space-6">
              <div className="flex items-center gap-space-3">
                <div className="w-14 h-14 rounded-[4px] border border-border bg-surface flex items-center justify-center font-display text-2xl font-bold text-pine">
                  KJ
                </div>
                <div>
                  <span className="block font-body-sm text-body-sm font-semibold text-ink">
                    Kanwar Junaid Islam
                  </span>
                  <span className="block font-code-sm text-code-sm text-ink-muted">
                    Full-Stack Developer
                  </span>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-[1px] bg-border"></div>
              <div>
                <span className="block font-code-sm text-code-sm text-ink-muted">PRIMARY METHOD</span>
                <span className="font-code-sm text-code-sm text-ink font-semibold">
                  Full-Stack Architecture &amp; Containerization
                </span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Structured Specification Table */}
          <div className="lg:col-span-5 bg-surface border border-border p-space-6 rounded-[0px]">
            <div className="flex items-center justify-between border-b border-border pb-space-3 mb-space-4">
              <span className="font-code-sm text-code-sm text-ink font-bold uppercase tracking-wider">
                Specifications &amp; Index
              </span>
              <span className="font-code-sm text-code-sm text-pine font-semibold">AIR_U // 2026</span>
            </div>

            <dl className="space-y-space-4 font-body-sm text-body-sm">
              <div className="border-b border-border pb-space-3">
                <dt className="font-code-sm text-code-sm text-ink-muted uppercase">Location</dt>
                <dd className="font-body-md text-body-md text-ink font-medium mt-0.5">
                  Islamabad, Pakistan (UTC+5)
                </dd>
              </div>

              <div className="border-b border-border pb-space-3">
                <dt className="font-code-sm text-code-sm text-ink-muted uppercase">Academic Credential</dt>
                <dd className="font-body-md text-body-md text-ink font-medium mt-0.5">
                  BS Computer Science — Air University (2022 — 2026)
                </dd>
              </div>

              <div className="border-b border-border pb-space-3">
                <dt className="font-code-sm text-code-sm text-ink-muted uppercase">Core Focus</dt>
                <dd className="font-body-md text-body-md text-ink font-medium mt-0.5">
                  Full-Stack Web, REST APIs, Microservices, Static Code Analysis
                </dd>
              </div>

              <div className="border-b border-border pb-space-3">
                <dt className="font-code-sm text-code-sm text-ink-muted uppercase">Currently Building</dt>
                <dd className="font-body-md text-body-md text-ink font-medium mt-0.5">
                  Code Arena: Tiered Progression Competition Platform with Docker Static Analysis
                </dd>
              </div>

              <div>
                <dt className="font-code-sm text-code-sm text-ink-muted uppercase">Primary Toolchain</dt>
                <dd className="font-body-md text-body-md text-ink font-medium mt-0.5">
                  JavaScript (ES6+), React, Node.js, Express.js, MongoDB, Docker, REST APIs
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
