import React from 'react';
import HeroSeciton from '../components/Hero_Section/Hero_Section';
import HowSection from '../components/How_Section/HowSection';
import TeachersSection from '../components/Teachers_Section/TeachersSection';

const Landing_Page: React.FC = () => {

  return (
      <div>
        <HeroSeciton />
        <HowSection />
        <TeachersSection />
      </div>
  );
};

export default Landing_Page;
