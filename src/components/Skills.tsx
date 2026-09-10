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
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-8 gap-space-4">
          <div>
            <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
              02 // Skills
            </span>
            <h2 className="font-headline-lg text-headline-lg text-ink mt-space-1 font-display">
              Technical Taxonomy
            </h2>
          </div>
          <p className="font-code-sm text-code-sm text-ink-muted max-w-sm">
            Disciplines arranged by architectural layer. Validated in real-world application builds.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.index}
              className="border border-border bg-surface p-space-6 flex flex-col justify-between rounded-[0px]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-space-3 mb-space-4">
                  <h3 className="font-body-md text-body-md font-semibold text-ink">{cat.title}</h3>
                  <span className="font-code-sm text-code-sm text-ink-muted">{cat.index}</span>
                </div>
                <p className="font-body-sm text-body-sm text-ink-muted mb-space-6">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-space-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-code-sm text-code-sm text-ink-muted bg-background border border-border px-2 py-1 rounded-[2px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Competencies Strip */}
        <div className="mt-space-8 border border-border bg-surface/50 p-space-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-4">
          <span className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider">
            Professional Practice:
          </span>
          <div className="flex flex-wrap gap-space-3">
            {softCompetencies.map((comp) => (
              <span
                key={comp}
                className="font-code-sm text-code-sm text-pine bg-background border border-border px-2.5 py-0.5 rounded-[2px]"
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
