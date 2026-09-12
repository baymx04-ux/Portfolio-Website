'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { GitHubIcon } from './icons';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="w-full border-t border-border bg-background py-space-24 scroll-mt-24" id="projects">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-space-12 gap-space-4">
          <div>
            <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
              Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-headline-lg text-ink mt-space-2 tracking-tight">
              Selected Work
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 font-code-sm text-code-sm text-ink-muted bg-white border border-border px-4 py-2 rounded-full shadow-card">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pine"></span>
            </span>
            {projects.length} DEPLOYED{projects.length === 1 ? '' : ' PROJECTS'}
          </span>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project, idx) => {
            const isAlternate = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="group border-t border-border py-8 sm:py-space-12 transition-colors first:border-t-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-space-10 items-center">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 overflow-hidden border border-border bg-surface rounded-2xl shadow-card group-hover:shadow-card-lg transition-shadow ${
                      isAlternate ? 'order-1 lg:order-2' : 'order-1'
                    }`}
                  >
                    <div className="transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={1200}
                        height={675}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 45vw"
                        className="w-full h-52 sm:h-64 lg:h-72 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col items-start ${
                      isAlternate ? 'order-2 lg:order-1' : 'order-2'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 sm:gap-space-3 mb-space-4">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-copper bg-copper/5 border border-copper/25 px-3 py-1 rounded-full font-semibold tracking-wide uppercase">
                          <span className="material-symbols-outlined text-[14px]">star</span>
                          Featured
                        </span>
                      )}
                      <span className="font-code-sm text-code-sm text-ink-muted uppercase">
                        {project.techStack[0] || 'ENGINEERING'}
                      </span>
                      <span className="font-code-sm text-code-sm text-border">/</span>
                      <span className="font-code-sm text-code-sm text-pine font-medium">
                        PRODUCTION
                      </span>
                    </div>

                    <h3 className="font-headline-md text-xl sm:text-2xl lg:text-headline-md text-ink mb-space-3 font-display tracking-tight group-hover:text-pine transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-body-md text-body-md text-ink-muted mb-space-5 leading-relaxed max-w-[620px]">
                      {project.description}
                    </p>

                    {/* Tech Stack Tokens */}
                    <div className="flex flex-wrap gap-2 sm:gap-space-2 mb-space-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-code-sm text-code-sm text-ink bg-white border border-border px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-space-6 font-body-sm text-body-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-pine font-semibold hover:text-ink transition-colors cursor-pointer bg-pine/5 border border-pine/20 px-4 py-2 rounded-full"
                        >
                          <span>Live Demo</span>
                          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-ink-muted hover:text-pine transition-colors cursor-pointer underline underline-offset-4"
                        >
                          <GitHubIcon className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}