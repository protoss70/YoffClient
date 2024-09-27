import React from 'react';
import HeroSeciton from '../components/Hero_Section/Hero_Section';
import HowSection from '../components/How_Section/HowSection';

const Landing_Page: React.FC = () => {

  return (
      <div>
        <HeroSeciton />
        <HowSection />
      </div>
  );
};

export default Landing_Page;
