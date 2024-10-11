import React from 'react';
import HeroSeciton from '../components/Hero_Section/Hero_Section';
import HowSection from '../components/How_Section/HowSection';
import TeachersSection from '../components/Teachers_Section/TeachersSection';
import LanguageSection from '../components/Languages_Section/LanguageSection';
import PricingSection from '../components/Pricing_Seciton/PricingSection';
import ContactSection from '../components/Contact_Section/ContactSection';

const Landing_Page: React.FC = () => {

  return (
      <div>
        <HeroSeciton />
        <HowSection />
        <TeachersSection />
        <LanguageSection />
        <PricingSection />
        <ContactSection />
      </div>
  );
};

export default Landing_Page;
