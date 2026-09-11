'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/lib/types';

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
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-ink mt-space-1 font-display">
              Selected Work
            </h2>
          </div>
          <span className="font-code-sm text-code-sm text-ink-muted hidden sm:inline">
            FULL STACK DEPLOYED CATALOG
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-space-8 items-center">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 overflow-hidden border border-border bg-surface rounded-[0px] ${
                      isAlternate ? 'order-1 lg:order-2' : 'order-1'
                    }`}
                  >
                    <div className="transition-transform duration-200 ease-out group-hover:-translate-y-1">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={1200}
                        height={675}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 45vw"
                        className="w-full h-52 sm:h-64 lg:h-72 object-cover filter contrast-105"
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
                    <div className="flex flex-wrap items-center gap-2 sm:gap-space-3 mb-space-3">
                      {project.featured && (
                        <span className="font-code-sm text-code-sm text-copper border border-copper px-2 py-0.5 rounded-[2px] font-semibold tracking-wide uppercase">
                          Featured Project
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

                    <h3 className="font-headline-md text-xl sm:text-2xl lg:text-headline-md text-ink mb-space-3 font-display group-hover:text-pine transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-body-md text-body-md text-ink mb-space-4 leading-relaxed max-w-[620px]">
                      {project.description}
                    </p>

                    {/* Tech Stack Tokens */}
                    <div className="flex flex-wrap gap-2 sm:gap-space-2 mb-space-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-code-sm text-code-sm text-ink-muted bg-surface border border-border px-2 py-1 rounded-[2px]"
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
                          className="inline-flex items-center gap-1 text-pine font-semibold underline underline-offset-4 decoration-1 hover:text-ink transition-colors cursor-pointer"
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
                          className="inline-flex items-center gap-1 text-ink-muted hover:text-ink transition-colors cursor-pointer"
                        >
                          <span>Source Code</span>
                          <span className="material-symbols-outlined text-[16px]">terminal</span>
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
