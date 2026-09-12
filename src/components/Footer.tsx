'use client';

import React from 'react';
import { GitHubIcon, LinkedInIcon } from './icons';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white/70 backdrop-blur-sm py-space-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">

        {/* Status / Location */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-space-3">
          <div className="w-2 h-2 rounded-full bg-pine shrink-0"></div>
          <span className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider">
            Islamabad, PK · UTC+5
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 font-code-sm text-code-sm">
          <a
            href="https://github.com/baymx04-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-muted hover:text-pine transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/junaid-kanwar-0725b6315/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-muted hover:text-pine transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="mailto:junaidkanwar04@gmail.com"
            className="inline-flex items-center gap-1.5 text-ink-muted hover:text-pine transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="font-code-sm text-code-sm text-ink-muted">
          &copy; {new Date().getFullYear()} Junaid Kanwar
        </div>

      </div>
    </footer>
  );
}