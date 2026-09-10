'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-space-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-space-4">
        {/* Status / Location */}
        <div className="flex items-center gap-space-3">
          <div className="w-2 h-2 rounded-full bg-pine"></div>
          <span className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider">
            Islamabad, PK (UTC+5)
          </span>
          <span className="font-code-sm text-code-sm text-border">/</span>
          <span className="font-code-sm text-code-sm text-pine font-medium">
            Open to Engineering Opportunities
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-space-6 font-code-sm text-code-sm">
          <a
            href="https://github.com/baymx04-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-pine transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href="https://www.linkedin.com/in/junaid-kanwar-0725b6315/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-pine transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a
            href="https://junaidkanwar.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-pine transition-colors"
          >
            Portfolio
          </a>
        </div>

        {/* Copyright */}
        <div className="font-code-sm text-code-sm text-ink-muted">
          &copy; {new Date().getFullYear()} Kanwar Junaid Islam
        </div>
      </div>
    </footer>
  );
}
