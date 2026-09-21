'use client';

import React from 'react';

export default function Timeline() {
  const timelineItems = [
    {
      period: '2022 to 2026',
      title: 'Bachelor of Science in Computer Science',
      institution: 'Air University',
      location: 'Islamabad, PK',
      description:
        'Comprehensive engineering study covering Data Structures, Algorithms, Distributed Databases, and Software Architecture. Spearheading Final Year Project "Code Arena" utilizing the JavaScript ecosystem and Docker static analysis.',
      badges: ['Data Structures & Algorithms', 'JavaScript Ecosystem', 'Docker', 'Systems Design'],
    },
    {
      period: '2020 to 2022',
      title: 'F.Sc. Pre-Engineering',
      institution: 'Army Public School and College (EME Campus)',
      location: 'Rawalpindi, PK',
      description:
        'Intensive foundation in higher mathematics, classical mechanics, physics, and empirical problem solving methodologies.',
      badges: ['Advanced Mathematics', 'Physics', 'Analytical Methods'],
    },
    {
      period: '2018 to 2020',
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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-12 gap-space-4">
          <div>
            <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
              Timeline
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-headline-lg text-ink mt-space-2 tracking-tight">
              Academic Path
            </h2>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-px"></div>

          <div className="flex flex-col gap-6 sm:gap-space-8">
            {timelineItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative md:grid md:grid-cols-2 md:gap-space-16"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-6 md:left-1/2 md:-translate-x-1/2 w-[15px] h-[15px]">
                    <span className="absolute inset-0 rounded-full bg-surface border-2 border-pine"></span>
                    <span className="absolute inset-[4px] rounded-full bg-pine"></span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-7 md:ml-0 bg-surface border border-border rounded-2xl p-5 sm:p-space-6 shadow-card hover:shadow-card-lg transition-shadow ${
                      isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-2'
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-baseline gap-2 sm:gap-space-3 mb-space-2 ${
                        isLeft ? 'md:flex-row-reverse md:justify-start' : ''
                      }`}
                    >
                      <span className="font-code-sm text-code-sm text-pine font-semibold">{item.period}</span>
                      <span className="font-code-sm text-code-sm text-ink-muted">{item.location}</span>
                    </div>
                    <h3 className="font-headline-sm text-lg sm:text-headline-sm text-ink font-semibold mb-space-1 tracking-tight">
                      {item.title}
                    </h3>
                    <span className="font-body-md text-body-md text-pine font-medium">{item.institution}</span>

                    <p className="font-body-sm text-body-sm text-ink-muted mt-space-3 mb-space-4 leading-relaxed text-justify">
                      {item.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        isLeft ? 'md:justify-end' : ''
                      }`}
                    >
                      {item.badges.map((b) => (
                        <span
                          key={b}
                          className="font-code-sm text-code-sm text-ink bg-background border border-border px-3 py-1 rounded-full"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Block */}
        <div className="mt-space-16 pt-space-10 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-4 mb-space-6">
            <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
              Verified Certifications &amp; Accreditations
            </span>
            <span className="font-code-sm text-code-sm text-ink-muted">{certifications.length} CREDENTIALS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-space-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group bg-surface border border-border p-4 sm:p-space-5 flex items-center justify-between rounded-2xl shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pine/5 border border-pine/20 flex items-center justify-center text-pine shrink-0">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </div>
                  <div>
                    <h4 className="font-body-md text-body-md font-semibold text-ink group-hover:text-pine transition-colors">
                      {cert.title}
                    </h4>
                    <span className="font-code-sm text-code-sm text-ink-muted">{cert.issuer}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 font-code-sm text-code-sm text-pine bg-pine/5 border border-pine/20 px-3 py-1.5 rounded-full shrink-0 ml-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pine"></span>
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