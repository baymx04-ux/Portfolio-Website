'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = `Project inquiry from ${formData.name}`;
    const body = `${formData.message}\n\n— ${formData.name}\n${formData.email}`;
    const mailtoUrl = `mailto:junaidkanwar04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section className="w-full border-t border-border bg-background py-space-24 scroll-mt-24" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        {/* Section Marker */}
        <div className="flex items-center gap-space-2 mb-space-3">
          <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
            05 // Contact
          </span>
        </div>

        {/* Display Headline */}
        <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-ink text-center mb-space-4 font-display">
          Let&apos;s build something impactful.
        </h2>

        <p className="font-body-md text-body-md text-ink-muted text-center max-w-lg mb-space-4 leading-relaxed">
          Open to full-time engineering opportunities, technical challenges, or full-stack contract development.
        </p>

        {/* Direct Channel Links */}
        <div className="flex flex-wrap items-center justify-center gap-space-4 mb-space-12 font-code-sm text-code-sm">
          <a
            href="mailto:junaidkanwar04@gmail.com"
            className="text-pine hover:text-ink transition-colors underline underline-offset-4 decoration-1 font-semibold"
          >
            junaidkanwar04@gmail.com
          </a>
          <span className="text-border">|</span>
          <a
            href="tel:+923155128728"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            +92 315 5128728
          </a>
          <span className="text-border">|</span>
          <span className="text-ink-muted">Islamabad, Pakistan</span>
        </div>

        {/* Transmission Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[540px] flex flex-col gap-space-4"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block font-code-sm text-code-sm text-ink-muted uppercase mb-1"
            >
              Sender Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-surface border border-border px-space-4 py-3 rounded-[2px] font-body-sm text-body-sm text-ink focus:outline-none focus:border-pine placeholder:text-outline-variant"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block font-code-sm text-code-sm text-ink-muted uppercase mb-1"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-surface border border-border px-space-4 py-3 rounded-[2px] font-body-sm text-body-sm text-ink focus:outline-none focus:border-pine placeholder:text-outline-variant"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block font-code-sm text-code-sm text-ink-muted uppercase mb-1"
            >
              Message / Project Scope
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              placeholder="Describe your role opening, technical objectives, or project scope..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-surface border border-border px-space-4 py-3 rounded-[2px] font-body-sm text-body-sm text-ink focus:outline-none focus:border-pine placeholder:text-outline-variant resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pine text-surface-container-lowest font-body-sm text-body-sm font-semibold py-3 rounded-[2px] hover:bg-primary transition-colors cursor-pointer text-center mt-space-2"
          >
            Send transmission
          </button>

          {submitted && (
            <div className="p-space-3 bg-surface border border-pine text-center rounded-[0px] animate-fade-in">
              <span className="font-code-sm text-code-sm text-pine font-medium">
                Transmission drafted. Your email client should open with the message prefilled
                to junaidkanwar04@gmail.com.
              </span>
            </div>
          )}
        </form>

        {/* Colophon */}
        <div className="mt-space-16 pt-space-8 border-t border-border w-full max-w-[680px] text-center">
          <p className="font-code-sm text-code-sm text-ink-muted leading-relaxed">
            Designed with precision geometry and typographic restraint. Typeset in Newsreader, IBM Plex Sans, and Space Mono.
          </p>
        </div>
      </div>
    </section>
  );
}
