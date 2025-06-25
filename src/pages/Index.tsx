
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Index;
