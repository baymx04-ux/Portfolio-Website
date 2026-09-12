'use client';

import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      index: '01',
      title: 'Frontend & Client Layer',
      description:
        'Responsive user interfaces, declarative component hierarchies, and interactive state management systems.',
      skills: ['JavaScript (ES6+)', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Blazor', 'Responsive UI'],
    },
    {
      index: '02',
      title: 'Backend & System APIs',
      description:
        'Modular Express routers, middleware authentication pipelines, RESTful data contracts, and automated endpoint verification.',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Postman', 'C# / .NET', 'JWT Auth'],
    },
    {
      index: '03',
      title: 'Databases & Infrastructure',
      description:
        'NoSQL schema aggregation, relational query design, containerized Docker environments, and Git workflow collaboration.',
      skills: ['MongoDB', 'Docker', 'Git & GitHub', 'Firebase', 'Microsoft SQL Server'],
    },
  ];

  const softCompetencies = [
    'Technical Leadership',
    'Analytical Problem Solving',
    'Clear Technical Communication',
    'Cross-functional Teamwork',
  ];

  return (
    <section className="w-full border-t border-border bg-background py-space-24 scroll-mt-24" id="skills">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-12 gap-space-4">
          <div>
            <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
              Skills
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-headline-lg text-ink mt-space-2 tracking-tight">
              Technical Arsenal
            </h2>
          </div>
        </div>

        {/* 3 Columns Grid — stacks on mobile, 2-col on tablet, 3-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-space-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.index}
              className="group bg-white border border-border p-6 sm:p-space-6 flex flex-col justify-between rounded-2xl shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between mb-space-4">
                  <span className="font-code-sm text-code-sm text-pine font-bold shrink-0">{cat.index}</span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-ink group-hover:text-pine transition-colors text-right">
                    {cat.title}
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-ink-muted mb-space-6">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-code-sm text-code-sm text-ink bg-background border border-border px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Competencies Strip */}
        <div className="mt-space-10 bg-white border border-border p-4 sm:p-space-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-5 rounded-2xl shadow-card">
          <span className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider shrink-0">
            Professional Practice:
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-space-3">
            {softCompetencies.map((comp) => (
              <span
                key={comp}
                className="font-code-sm text-code-sm text-pine bg-pine/5 border border-pine/20 px-3 py-1 rounded-full"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}