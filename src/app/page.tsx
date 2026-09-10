import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getPublishedProjects } from '@/lib/storage';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const projects = getPublishedProjects();

  return (
    <div className="min-h-screen bg-background text-ink selection:bg-pine selection:text-white">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
