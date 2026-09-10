'use client';

import React from 'react';

export default function Timeline() {
  const timelineItems = [
    {
      period: '2022 — 2026',
      title: 'Bachelor of Science in Computer Science',
      institution: 'Air University',
      location: 'Islamabad, PK',
      description:
        'Comprehensive engineering study covering Data Structures, Algorithms, Distributed Databases, and Software Architecture. Spearheading Final Year Project "Code Arena" utilizing the JavaScript ecosystem and Docker static analysis.',
      badges: ['Data Structures & Algorithms', 'JavaScript Ecosystem', 'Docker', 'Systems Design'],
    },
    {
      period: '2020 — 2022',
      title: 'F.Sc. Pre-Engineering',
      institution: 'Army Public School and College (EME Campus)',
      location: 'Rawalpindi, PK',
      description:
        'Intensive foundation in higher mathematics, classical mechanics, physics, and empirical problem solving methodologies.',
      badges: ['Advanced Mathematics', 'Physics', 'Analytical Methods'],
    },
    {
      period: '2018 — 2020',
      title: 'Matriculation in Science',
      institution: 'Progressive Model School',
      location: 'Rawalpindi, PK',
      description:
        'Early grounding in computer science fundamentals, logic design, and natural sciences.',
      badges: ['Computer Science', 'Foundational Mathematics'],
    },
  ];

  const certifications = [
    {
      title: 'AI Skills Challenge',
      issuer: 'Microsoft',
      year: 'Verified Credential',
    },
    {
      title: 'Computer Architecture',
      issuer: 'Saylor Academy',
      year: 'Verified Credential',
    },
  ];

  return (
    <section className="w-full border-t border-border bg-background py-space-24 scroll-mt-24" id="timeline">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-12 gap-space-4">
          <div>
            <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
              04 // Timeline
            </span>
            <h2 className="font-headline-lg text-headline-lg text-ink mt-space-1 font-display">
              Academic &amp; Professional Path
            </h2>
          </div>
          <span className="font-code-sm text-code-sm text-ink-muted">CHRONOLOGY 2018 — PRESENT</span>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 md:pl-0">
          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-space-6 pb-space-12 relative last:pb-0"
            >
              {/* Date column */}
              <div className="md:col-span-3 flex md:justify-end items-start pt-1">
                <span className="font-code-md text-code-md text-ink font-semibold">
                  {item.period}
                </span>
              </div>

              {/* Vertical line and marker */}
              <div className="hidden md:flex md:col-span-1 justify-center relative">
                <div className="w-[1px] bg-border h-full absolute top-0"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-pine z-10 mt-2"></div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 flex flex-col">
                <div className="flex flex-wrap items-baseline gap-space-3 mb-space-2">
                  <h3 className="font-headline-sm text-headline-sm text-ink font-semibold">
                    {item.title}
                  </h3>
                  <span className="font-body-md text-body-md text-pine font-medium">
                    {item.institution}
                  </span>
                  <span className="font-code-sm text-code-sm text-ink-muted">
                    {item.location}
                  </span>
                </div>

                <p className="font-body-md text-body-md text-ink mb-space-3 leading-relaxed max-w-[700px]">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-space-2">
                  {item.badges.map((b) => (
                    <span
                      key={b}
                      className="font-code-sm text-code-sm text-ink-muted bg-surface border border-border px-2 py-0.5 rounded-[2px]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Block */}
        <div className="mt-space-16 pt-space-8 border-t border-border">
          <div className="flex items-center justify-between mb-space-6">
            <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
              Verified Certifications &amp; Accreditations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-surface border border-border p-space-4 flex items-center justify-between rounded-[0px]"
              >
                <div>
                  <h4 className="font-body-md text-body-md font-semibold text-ink">{cert.title}</h4>
                  <span className="font-code-sm text-code-sm text-ink-muted">{cert.issuer}</span>
                </div>
                <span className="font-code-sm text-code-sm text-pine border border-pine/30 bg-surface-bright px-2 py-0.5 rounded-[2px]">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
