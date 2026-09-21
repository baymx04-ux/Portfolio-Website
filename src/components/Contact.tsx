'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || status === 'sending') return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setStatus('error');
        return;
      }

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send message', err);
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full bg-[#13161B] border border-border px-4 py-3.5 rounded-xl font-body-sm text-body-sm text-ink placeholder:text-outline-variant focus:outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-all';

  return (
    <section className="w-full border-t border-border bg-background py-space-24 scroll-mt-24" id="contact">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Section Marker */}
        <div className="inline-flex items-center gap-space-2 mb-space-3">
          <span className="font-code-sm text-code-sm text-pine uppercase tracking-wider font-semibold">
            Contact
          </span>
        </div>

        {/* Display Headline */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-headline-lg text-ink text-center mb-space-5 tracking-tight">
          Let&apos;s build something impactful.
        </h2>

        <p className="font-body-md text-body-md text-ink-muted text-justify max-w-lg mb-space-8 leading-relaxed px-2">
          Have a role, a collaboration, or a project in mind? Describe your scope below. I respond promptly.
        </p>

        {/* Direct Channel Links */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-space-3 mb-space-12 font-code-sm text-code-sm text-center">
          <a
            href="mailto:junaidkanwar04@gmail.com"
            className="inline-flex items-center gap-2 text-pine bg-surface border border-border px-4 py-2 rounded-full hover:border-pine hover:shadow-card transition-all font-semibold break-all"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            junaidkanwar04@gmail.com
          </a>
          <a
            href="tel:+923155128728"
            className="inline-flex items-center gap-2 text-ink-muted bg-surface border border-border px-4 py-2 rounded-full hover:text-pine hover:border-pine hover:shadow-card transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            +92 315 5128728
          </a>
          <span className="inline-flex items-center gap-2 text-ink-muted bg-surface border border-border px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Islamabad, Pakistan
          </span>
        </div>

        {/* Transmission Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[540px] bg-surface border border-border rounded-2xl p-6 sm:p-space-8 shadow-card flex flex-col gap-space-5"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block font-code-sm text-code-sm text-ink-muted uppercase mb-1.5"
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
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block font-code-sm text-code-sm text-ink-muted uppercase mb-1.5"
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
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block font-code-sm text-code-sm text-ink-muted uppercase mb-1.5"
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
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 bg-pine text-black font-body-sm text-body-sm font-semibold py-3.5 rounded-full hover:bg-primary transition-all cursor-pointer text-center mt-space-2 disabled:opacity-50"
          >
            {status === 'sending' ? 'Transmitting...' : 'Send message'}
            {status !== 'sending' && (
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            )}
          </button>

          {status === 'sent' && (
            <div className="inline-flex items-center justify-center gap-2 p-space-4 bg-pine/5 border border-pine/20 text-center rounded-xl animate-fade-in">
              <span className="material-symbols-outlined text-[18px] text-pine">check_circle</span>
              <span className="font-code-sm text-code-sm text-pine font-medium">
                Transmission received. Replies are usually sent within 24 hours.
              </span>
            </div>
          )}

          {status === 'error' && (
            <div className="inline-flex items-center justify-center gap-2 p-space-4 bg-error/5 border border-error/25 text-center rounded-xl animate-fade-in">
              <span className="material-symbols-outlined text-[18px] text-error">error</span>
              <span className="font-code-sm text-code-sm text-error font-medium">
                Transmission failed. Please try again or email junaidkanwar04@gmail.com directly.
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}