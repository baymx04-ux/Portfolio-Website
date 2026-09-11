'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-space-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-space-4 text-center sm:text-left">

        {/* Status / Location */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-space-3">
          <div className="w-2 h-2 rounded-full bg-pine shrink-0"></div>
          <span className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider">
            Islamabad, PK · UTC+5
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 font-code-sm text-code-sm">
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
            href="mailto:junaidkanwar04@gmail.com"
            className="text-ink-muted hover:text-pine transition-colors"
          >
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
