import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yoffLogo from "../../assets/logo.svg";
import Hamburger from "./sub-components/hamburger";

interface NavbarProps {
  currentSection: string | "hero" | "how" | "language" | "pricing";
}

const NavBar: React.FC<NavbarProps> = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const languageSelectRef = useRef<HTMLDivElement | null>(null);
  const profileSelectRef = useRef<HTMLDivElement | null>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerLanguageSelectRef = useRef<HTMLDivElement | null>(null); // Separate ref for hamburger menu
  const hamburgerProfileRef = useRef<HTMLDivElement | null>(null);

  const handleNavClick = (path: string) => {
    toggleMenu();
    // Check if the path has a hash
    if (path.includes("#")) {
      // Navigate to the root and then scroll to the section
      const [basePath, sectionId] = path.split("#");
      navigate(basePath); // Navigate to the root URL
      setTimeout(() => {
        handleScrollToSection(sectionId); // Scroll to the section after a brief delay
      }, 100); // Adjust the timeout duration if necessary
    } else {
      navigate(path); // Normal navigation
    }
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    if (hamburgerMenuRef.current) {
      hamburgerMenuRef.current.classList.toggle('hidden');
    }
    setHamburgerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check for language select
      if (languageSelectRef.current && !languageSelectRef.current.contains(event.target as Node)) {
        languageSelectRef.current.classList.add("hidden");
      }
  
      // Check for hamburger language select
      if (hamburgerLanguageSelectRef.current && !hamburgerLanguageSelectRef.current.contains(event.target as Node)) {
        hamburgerLanguageSelectRef.current.classList.add("hidden");
      }

      // Check for hamburger profile select
      if (hamburgerProfileRef.current && !hamburgerProfileRef.current.contains(event.target as Node)) {
        hamburgerProfileRef.current.classList.add("hidden");
      }
      
      // Check for hamburger menu
      if (hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(event.target as Node) && !hamburgerMenuRef.current.classList.contains("hidden")) {
        toggleMenu();
      }
  
      // Check for profile select
      if (profileSelectRef.current && !profileSelectRef.current.contains(event.target as Node)) {
        profileSelectRef.current.classList.add("hidden");
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageSelectRef, hamburgerLanguageSelectRef, hamburgerMenuRef, profileSelectRef]);

  return (
    <nav className="fixed top-0 left-0 z-30 w-full">
      <div className='relative w-full h-24 px-24 bg-white shadow-md max-1300:px-12 max-900:px-6 max-600:px-1'>
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <div onClick={() => handleNavClick("/")} className='flex items-center h-24 mr-28 hover:cursor-pointer'>
            <img className='h-20 ml-[-5px]' src={yoffLogo} alt="Yoff Logo" />
          </div>

          {/* Hamburger Menu */}
          <Hamburger toggleMenu={toggleMenu} isOpen={hamburgerOpen} />
          <div ref={hamburgerMenuRef} className='absolute left-0 flex flex-col hidden w-full bg-white shadow-md min-900:hidden font-poppins top-24'>
            <h3 className='px-6 text-lg font-semibold'>Links</h3>
            <hr className='mx-6 border-t-2 border-t-main' />
            <button onClick={() => handleNavClick("/")} className='w-full px-6 py-2 font-semibold text-start text-main hover:underline'>Home</button>
            <button onClick={() => handleNavClick("/#LanguageSelection")} className='px-6 py-2 text-start hover:underline'>Languages</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
