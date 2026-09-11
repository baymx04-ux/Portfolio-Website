'use client';

import React from 'react';

export default function About() {
  return (
    <section className="w-full border-t border-border bg-background py-space-24 scroll-mt-24" id="about">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-space-8 items-start">

          {/* Left 7 Columns: Narrative Bio */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold mb-space-3">
              About
            </span>

            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-ink mb-space-6 font-display">
              Building efficient web platforms with mechanical discipline.
            </h2>

            <div className="font-body-md text-body-md text-ink space-y-space-4 max-w-[620px] leading-relaxed">
              <p>
                I&apos;m a Computer Science student at Air University, Islamabad, with a strong foundation in full-stack web development. I engineer platforms characterized by low latency, intuitive user interactions, and robust asynchronous backends.
              </p>
              <p>
                My approach prioritizes clarity over complexity — whether designing decoupled MongoDB schemas, crafting type-safe Express middleware, or building isolated Docker environments for automated code grading. I care deeply about software durability, readability, and reliable error recovery.
              </p>
            </div>
          </div>

          {/* Right 5 Columns: Specification Panel */}
          <div className="lg:col-span-5 bg-surface border border-border p-4 sm:p-space-6 rounded-[0px]">
            <div className="flex items-center justify-between border-b border-border pb-space-3 mb-space-4">
              <span className="font-code-sm text-code-sm text-ink font-bold uppercase tracking-wider">
                Quick Facts
              </span>
              <span className="font-code-sm text-code-sm text-pine font-semibold shrink-0 ml-2">2026</span>
            </div>

            <dl className="space-y-space-4">
              <div className="border-b border-border pb-space-3">
                <dt className="font-code-sm text-code-sm text-ink-muted uppercase">Education</dt>
                <dd className="font-body-md text-body-md text-ink font-medium mt-0.5">
                  BS Computer Science<br />
                  <span className="text-ink-muted font-normal">Air University, Islamabad · 2022–2026</span>
                </dd>
              </div>

              <div className="border-b border-border pb-space-3">
                <dt className="font-code-sm text-code-sm text-ink-muted uppercase">Core Interests</dt>
                <dd className="font-body-md text-body-md text-ink font-medium mt-0.5">
                  Systems design, developer tooling, and cloud-native infrastructure
                </dd>
              </div>

              <div>
                <dt className="font-code-sm text-code-sm text-ink-muted uppercase">Primary Toolchain</dt>
                <dd className="font-body-md text-body-md text-ink font-medium mt-0.5">
                  JavaScript · React · Node.js · Express · MongoDB · Docker
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}
