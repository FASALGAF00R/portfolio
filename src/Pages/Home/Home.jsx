import React, { useRef } from 'react';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import { Skills } from '../Skills/Skills';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

function Home() {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const headerRef = useRef(null);

  const scrollToSection = (refName) => {
    const refs = {
      projectsRef,
      skillsRef,
      contactRef,
      footerRef,
      headerRef
    };

    if (refs[refName] && refs[refName].current) {
      refs[refName].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-h-screen overflow-y-auto hidescroll flex flex-col justify-between bg-black">
      <div ref={headerRef} className="w-full">
        <Header scrollToSection={scrollToSection} />
      </div>
      <div ref={projectsRef} className="w-full">
        <Projects />
      </div>
      <div ref={skillsRef} className="w-full">
        <Skills />
      </div>
      <div ref={contactRef} className="w-full">
        <Contact />
      </div>
      <div ref={footerRef} className="w-full">
        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

export default Home;