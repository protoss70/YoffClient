import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yoffLogo from "../../assets/logo.svg";
import globeIcon from "../../assets/globe.svg";
import Hamburger from "./sub-components/hamburger";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const languageSelectRef = useRef<HTMLDivElement | null>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerLanguageSelectRef = useRef<HTMLDivElement | null>(null); // Separate ref for hamburger menu

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

  const toggleLanguageSelect = () => {
    if (!languageSelectRef.current) return;
    languageSelectRef.current.classList.toggle("hidden");
  };

  const toggleHamburgerLanguageSelect = () => {
    if (!hamburgerLanguageSelectRef.current) return;
    hamburgerLanguageSelectRef.current.classList.toggle("hidden");
  };

  const languageSelect = (language: "Russian" | "English", hamburgerButton: boolean = false) => {
    setLanguage(language);
    if (hamburgerButton) {
      toggleHamburgerLanguageSelect(); // Close the hamburger language select
    } else {
      toggleLanguageSelect(); // Close the main language select
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
      if (languageSelectRef.current && !languageSelectRef.current.contains(event.target as Node)) {
        languageSelectRef.current.classList.add("hidden");
      }
      if (hamburgerLanguageSelectRef.current && !hamburgerLanguageSelectRef.current.contains(event.target as Node)) {
        hamburgerLanguageSelectRef.current.classList.add("hidden");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className='relative w-full h-24 px-24 bg-white shadow max-1300:px-12 max-900:px-6'>
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <div onClick={() => handleNavClick("/")} className='flex items-center h-24 mr-28 hover:cursor-pointer'>
            <img className='h-20 ml-[-5px]' src={yoffLogo} alt="Yoff Logo" />
          </div>

          {/* Mid Nav Buttons */}
          <div className='flex justify-between font-poppins gap-9 max-900:hidden'>
            <button onClick={() => handleNavClick("/")} className='px-5 py-1 font-semibold text-white bg-main rounded-2xl hover:underline'>Home</button>
            <button onClick={() => handleNavClick("/#HowItWorks")} className='hover:underline max-1100:hidden'>How It Works</button>
            <button onClick={() => handleNavClick("/#LanguageSelection")} className='hover:underline'>Languages</button>
            <button onClick={() => handleNavClick("/#PricingSection")} className='hover:underline'>Pricing</button>
            <button onClick={() => handleNavClick("/teachers")} className='hover:underline'>Teachers</button>
          </div>

          {/* End Nav Buttons */}
          <div className='flex gap-6 p-1 font-poppins max-900:hidden'>
            <button onClick={() => handleNavClick("/login")} className='font-semibold underline text-main'>
              Login
            </button>
            <button className='px-3 py-1 text-lg font-medium text-center text-white transition-all duration-100 shadow-inner max-1100:text-base max-1100:px-2 bg-gradient-to-r from-main to-secondary rounded-xl hover:to-main hover:from-secondary'>
              Schedule Class
            </button>
            <div className='relative font-poppins'>
              <button onClick={toggleLanguageSelect} className='flex items-center gap-2 px-2 py-1 bg-white border border-black rounded-xl'>
                <img className='h-10' src={globeIcon} alt="globe icon" />
                <span className='font-medium max-1100:hidden'>{language}</span>
              </button>
              {/* Language select field */}
              <div
                ref={languageSelectRef}
                className='absolute left-0 hidden w-full bg-white border border-slate-400 max-1100:left-auto max-1100:right-0 max-1100:w-28 top-16 rounded-xl hover:cursor-default'
              >
                <div className="flex flex-col items-start w-full">
                  <button
                    onClick={() => { languageSelect('English') }}
                    className="w-full p-2 text-left rounded-b-none rounded-xl hover:bg-gray-200 focus:outline-none"
                  >
                    English
                  </button>
                  <button
                    onClick={() => { languageSelect('Russian') }}
                    className="w-full p-2 text-left rounded-t-none rounded-xl hover:bg-gray-200 focus:outline-none"
                  >
                    Russian
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hamburger Menu */}
          <Hamburger toggleMenu={toggleMenu} isOpen={hamburgerOpen} />
          <div ref={hamburgerMenuRef} className='absolute left-0 flex flex-col hidden w-full bg-white shadow-md min-900:hidden font-poppins top-24'>
            <h3 className='px-6 text-lg font-semibold'>Links</h3>
            <hr className='mx-6 border-t-2 border-t-main' />
            <button onClick={() => handleNavClick("/")} className='w-full px-6 py-2 font-semibold text-start text-main hover:underline'>Home</button>
            <button onClick={() => handleNavClick("/#HowItWorks")} className='px-6 py-2 text-start hover:underline'>How It Works</button>
            <button onClick={() => handleNavClick("/#LanguageSelection")} className='px-6 py-2 text-start hover:underline'>Languages</button>
            <button onClick={() => handleNavClick("/#PricingSection")} className='px-6 py-2 text-start hover:underline'>Pricing</button>
            <button onClick={() => handleNavClick("/teachers")} className='px-6 py-2 text-start hover:underline'>Teachers</button>
            <br />
            <h3 className='px-6 text-lg font-semibold'>Actions</h3>
            <hr className='mx-6 border-t-2 border-t-main' />
            <button onClick={() => handleNavClick("/login")} className='px-6 py-2 font-medium hover:underline text-start'>
              Login
            </button>
            <button className='px-6 py-2 font-semibold text-main text-start hover:underline'>
              Schedule Class
            </button>
            <button onClick={toggleHamburgerLanguageSelect} className='flex items-center gap-2 px-5 py-2'>
              <img className='h-8' src={globeIcon} alt="globe icon" />
              <span className='font-medium text-start hover:underline'>{language}</span>
            </button>
            {/* Language select field in hamburger menu */}
            <div
              ref={hamburgerLanguageSelectRef}
              className='absolute bottom-0 left-0 hidden w-full bg-white border rounded border-slate-400 hover:cursor-default'
            >
              <div className="flex flex-col items-start w-full">
                <button
                  onClick={() => { languageSelect('English', true) }}
                  className="w-full p-2 text-left rounded rounded-b-none hover:bg-gray-200 focus:outline-none"
                >
                  English
                </button>
                <button
                  onClick={() => { languageSelect('Russian', true) }}
                  className="w-full p-2 text-left rounded rounded-t-none hover:bg-gray-200 focus:outline-none"
                >
                  Russian
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
