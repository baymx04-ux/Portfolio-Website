'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="w-full pt-20" id="hero">
      {/* Blueprint Context Meta Bar */}
      <div className="w-full border-b border-border bg-surface/50 py-space-3">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-between gap-space-2 text-ink-muted">
          <div className="flex flex-wrap items-center gap-space-3">
            <span className="font-code-sm text-code-sm uppercase tracking-widest text-ink font-semibold">
              REF: ARCH-2026.JK
            </span>
            <span className="text-border">|</span>
            <span className="font-code-sm text-code-sm">SYS_ENV: WEB_PROD</span>
            <span className="text-border">|</span>
            <span className="font-code-sm text-code-sm hidden sm:inline">
              LOC: 33.6844° N, 73.0479° E (Islamabad, PK)
            </span>
          </div>
          <div className="flex items-center gap-space-2 font-code-sm text-code-sm">
            <span className="w-2 h-2 rounded-full bg-pine inline-block"></span>
            <span className="text-ink font-semibold">DAEMON ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-[1200px] mx-auto px-6 pt-space-12 pb-space-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-start">
          {/* Left 7 Columns */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-space-4">
            {/* Pulsing Status Dot */}
            <div className="flex items-center gap-space-3 mb-space-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pine opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pine"></span>
              </span>
              <span className="font-body-sm text-body-sm text-ink-muted">
                Available for full-time engineering &amp; freelance contracts
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-display text-ink tracking-tight mb-space-3">
              Junaid Kanwar
            </h1>
            <p className="font-headline-sm text-headline-sm text-pine font-medium mb-space-4">
              Full-Stack Developer
            </p>

            {/* Bio Paragraph */}
            <p className="font-body-lg text-body-lg text-ink-muted max-w-[640px] mb-space-8 leading-relaxed">
              Computer Science engineer passionate about building resilient, user-friendly, and high-performance web applications. Specialized in modern full-stack web architecture, decoupled RESTful APIs, and containerized Docker environments.
            </p>

            {/* Button Actions */}
            <div className="flex flex-wrap items-center gap-space-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-pine text-surface-container-lowest font-body-sm text-body-sm font-semibold px-6 py-3 rounded-[2px] hover:bg-primary transition-colors cursor-pointer"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-transparent border border-border text-ink font-body-sm text-body-sm font-medium px-6 py-3 rounded-[2px] hover:border-pine hover:text-pine transition-colors cursor-pointer"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/baymx04-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-code-sm text-code-sm text-ink-muted hover:text-ink px-3 py-3 transition-colors"
              >
                <span>github.com/baymx04-ux</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Blueprint Telemetry Terminal */}
          <div className="lg:col-span-5 w-full mt-space-6 lg:mt-0">
            <div className="w-full bg-surface border border-border p-space-4 rounded-[0px]">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-border pb-space-2 mb-space-4">
                <div className="flex items-center gap-space-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-border inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-border inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-border inline-block"></span>
                  <span className="font-code-sm text-code-sm text-ink-muted ml-space-2">
                    pts/0 (junaid@web-node)
                  </span>
                </div>
                <span className="font-code-sm text-code-sm text-ink-muted">TLS v1.3</span>
              </div>

              {/* Terminal Code Snippets */}
              <div className="font-code-sm text-code-sm text-ink space-y-2 leading-relaxed overflow-x-auto">
                <p className="text-ink-muted">
                  <span className="text-pine font-bold">$</span> curl -s https://api.junaid.dev/health
                </p>
                <p className="text-ink pl-space-2">
                  &#123;&quot;status&quot;:&quot;nominal&quot;,&quot;stack&quot;:&quot;WEB&quot;,&quot;uptime&quot;:&quot;99.98%&quot;&#125;
                </p>
                <p className="text-ink-muted pt-space-2">
                  <span className="text-pine font-bold">$</span> node --version &amp;&amp; npm --version
                </p>
                <p className="text-ink pl-space-2">
                  v22.20.0 | npm 10.9.3 (x64-win32)
                </p>
                <p className="text-ink-muted pt-space-2">
                  <span className="text-pine font-bold">$</span> docker inspect code-arena-runner --format=&quot;&#123;&#123;.State.Status&#125;&#125;&quot;
                </p>
                <p className="text-ink pl-space-2">running (sandboxed)</p>
                <p className="text-ink-muted pt-space-1 flex items-center gap-1">
                  <span className="text-pine font-bold">$</span>
                  <span className="inline-block w-2 h-3.5 bg-pine animate-pulse"></span>
                </p>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 border border-border border-t-0 bg-background divide-x divide-border">
              <div className="p-space-3">
                <span className="block font-code-sm text-[10px] text-ink-muted uppercase">ENV</span>
                <span className="font-code-md text-code-md text-ink font-bold">Node / Web</span>
              </div>
              <div className="p-space-3">
                <span className="block font-code-sm text-[10px] text-ink-muted uppercase">LATENCY</span>
                <span className="font-code-md text-code-md text-ink font-bold">&lt; 15ms</span>
              </div>
              <div className="p-space-3">
                <span className="block font-code-sm text-[10px] text-ink-muted uppercase">CONTAINERS</span>
                <span className="font-code-md text-code-md text-pine font-bold">Docker Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
