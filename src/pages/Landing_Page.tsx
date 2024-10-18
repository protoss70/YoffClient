import React, { useEffect, useRef } from 'react';
import HeroSeciton from '../components/Hero_Section/Hero_Section';
import HowSection from '../components/How_Section/HowSection';
import LanguageSection from '../components/Languages_Section/LanguageSection';
import PricingSection from '../components/Pricing_Seciton/PricingSection';
import TeachersSection from '../components/Teachers_Section/TeachersSection';
import ContactSection from '../components/Contact_Section/ContactSection';

interface LandingPageProps {
  setCurrentSection: (section: string) => void; // Accept setCurrentSection prop
}

const Landing_Page: React.FC<LandingPageProps> = ({ setCurrentSection }) => {
  const sectionsRef = {
    hero: useRef<HTMLDivElement | null>(null),
    how: useRef<HTMLDivElement | null>(null),
    language: useRef<HTMLDivElement | null>(null),
    pricing: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.5, // Adjust threshold for visibility
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id); // Update currentSection in App
        }
      });
    }, options);

    // Observe the sections
    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup observer on unmount
      observer.disconnect();
    };
  }, [setCurrentSection]);

  return (
    <div id='HeroSection'>
      <div ref={sectionsRef.hero} id="hero">
        <HeroSeciton />
      </div>
      <div ref={sectionsRef.how} id="how">
        <HowSection />
      </div>
      <TeachersSection />
      <div ref={sectionsRef.language} id="language">
        <LanguageSection />
      </div>
      <div ref={sectionsRef.pricing} id="pricing">
        <PricingSection />
      </div>
      <div>
      <ContactSection />
      </div>
    </div>
  );
};

export default Landing_Page;
