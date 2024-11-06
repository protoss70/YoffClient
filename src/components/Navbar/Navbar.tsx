import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import yoffLogo from "../../assets/logo.svg";
import globeIcon from "../../assets/globe.svg";
import Hamburger from "./sub-components/hamburger";
import userIcon from "../../assets/user-profile.svg";
import { useAuth } from '../../context/authContext';
import Button from '../Button/Button';
import WorldFlag from 'react-world-flags';
import { createPopupEvent } from '../../utility/modal_utils';

interface NavbarProps {
  currentSection: string | "hero" | "how" | "language" | "pricing";
}

const NavBar: React.FC<NavbarProps> = ({ currentSection }) => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, currentUser } = useAuth();
  const [language, setLanguage] = useState("English");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation();
  const languageSelectRef = useRef<HTMLDivElement | null>(null);
  const profileSelectRef = useRef<HTMLDivElement | null>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerLanguageSelectRef = useRef<HTMLDivElement | null>(null); // Separate ref for hamburger menu
  const hamburgerProfileRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  useEffect(() => {
    switch (currentSection) {
      case "hero":
        setActiveIndex(0);
        break;
      case "how":
        setActiveIndex(1);
        break;
      case "language":
        setActiveIndex(2);
        break;
      case "pricing":
        setActiveIndex(3);
        break;
      default:
        break;
    }
  }, [currentSection])

  const logoutClick = () => {
    createPopupEvent(
      "Logout",
      `Are you sure you want to logout of ${currentUser?.email}`,
      {
        success: { text: "Logout", type: "danger" },
        cancel: { text: "Cancel", type: "secondary" },
      },
      (response: boolean) => {
        if (response){
          logout();
        }
      }
    );
  }
  currentUser?.getIdToken().then((res) => {
    console.log(res);
  })

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

  useEffect(() => {
    if (location.pathname.match("/teachers")) {
      setActiveIndex(4);
    } else {
      setActiveIndex(0);
    }
  }, [location.pathname]);

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

  const toggleProfilePopup = () => {
    if (!profileSelectRef.current) return;
    profileSelectRef.current.classList.toggle("hidden");
  };

  const toggleHamburgerLanguageSelect = () => {
    if (!hamburgerLanguageSelectRef.current) return;
    hamburgerLanguageSelectRef.current.classList.toggle("hidden");
  };

  const toggleHamburgerProfileSelect = () => {
    if (!hamburgerProfileRef.current) return;
    hamburgerProfileRef.current.classList.toggle("hidden");
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
      <div className='relative w-full h-24 px-24 bg-white shadow max-1300:px-12 max-900:px-6 max-600:px-1'>
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <div onClick={() => handleNavClick("/")} className='flex items-center h-24 mr-28 hover:cursor-pointer'>
            <img className='h-20 ml-[-5px]' src={yoffLogo} alt="Yoff Logo" />
          </div>

          {/* Mid Nav Buttons */}
          <div className='flex justify-between font-poppins gap-9 max-900:hidden'>
            <button onClick={() => handleNavClick("/#HeroSection")} className={`${activeIndex === 0 ? "px-5 py-1 font-semibold text-white bg-main rounded-2xl" : ""} hover:underline`}>Home</button>
            <button onClick={() => handleNavClick("/#HowItWorks")} className={`${activeIndex === 1 ? "px-5 py-1 font-semibold text-white bg-main rounded-2xl" : ""} hover:underline max-1100:hidden`}>How It Works</button>
            <button onClick={() => handleNavClick("/#LanguageSelection")} className={`${activeIndex === 2 ? "px-5 py-1 font-semibold text-white bg-main rounded-2xl" : ""} hover:underline`}>Languages</button>
            <button onClick={() => handleNavClick("/#PricingSection")} className={`${activeIndex === 3 ? "px-5 py-1 font-semibold text-white bg-main rounded-2xl" : ""} hover:underline`}>Pricing</button>
            <button onClick={() => handleNavClick("/teachers")} className={`${activeIndex === 4 ? "px-5 py-1 font-semibold text-white bg-main rounded-2xl" : ""} hover:underline`}>Teachers</button>
          </div>

          {/* End Nav Buttons */}
          <div className='flex gap-6 p-1 font-poppins max-900:hidden'>

            {/* LOGIN BUTTON */}
            {!isAuthenticated ? 
              <button onClick={() => handleNavClick("/login")} className='font-semibold underline text-main'>
                Login
              </button>
              :
              null
            }
            <Button text='Schedule Class' variant='inline' buttonClasses='!px-3 !py-1'/>

            {/* USER PROFILE */}
            {isAuthenticated ? 
              <div className='relative font-poppins'>
                <button onClick={toggleProfilePopup} className='flex items-center gap-2 px-2 py-3 bg-white border border-black font-poppins rounded-xl'>
                    <img className='h-6' src={userIcon} alt="globe icon" />
                    <span className='font-medium'>Profile</span>
                </button>
                {/* USER PROFILE POPUP */}
                <div
                  ref={profileSelectRef}
                  className='absolute left-0 hidden w-auto bg-white border border-slate-300 max-1100:left-auto max-1100:right-0 max-1100:w-28 top-16 rounded-xl hover:cursor-default'
                >
                  <div className="flex flex-col items-start w-full">
                    <div
                      className="w-full p-2 text-left rounded-b-none whitespace-nowrap rounded-xl"
                    >
                      <b>Email:</b> {currentUser?.email}
                    </div>
                    <div className='w-full p-2 text-left whitespace-nowrap'>
                      <b>Credits:</b> 1
                    </div>
                    <button
                      onClick={() => {}}
                      className="w-full p-2 text-left hover:bg-gray-200 focus:outline-none"
                    >
                      My Classes
                    </button>
                    <button
                      onClick={logoutClick}
                      className="w-full p-2 text-left rounded-t-none rounded-xl hover:bg-red-100 focus:outline-none"
                    >
                      Logout
                    </button>
                    </div>
                  </div>
                </div>
                :
                null
            }
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
                    className="flex items-center w-full p-2 text-left rounded-b-none rounded-xl hover:bg-gray-200 focus:outline-none"
                  >
                    <WorldFlag code="GB" style={{ width: '20px', height: '20px', marginRight: '8px' }} /> {/* Flag for England */}
                    English
                  </button>
                  <button
                    onClick={() => { languageSelect('Russian') }}
                    className="flex items-center w-full p-2 text-left rounded-t-none rounded-xl hover:bg-gray-200 focus:outline-none"
                  >
                    <WorldFlag code="RU" style={{ width: '20px', height: '20px', marginRight: '8px' }} /> {/* Flag for Russia */}
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
            {!isAuthenticated?
              <button onClick={() => handleNavClick("/login")} className='px-6 py-2 font-medium hover:underline text-start'>
                Login
              </button>
              : null
            }
            
            <button className='px-6 py-2 font-semibold text-main text-start hover:underline'>
              Schedule Class
            </button>
            {isAuthenticated ? 
            <>
              <button onClick={toggleHamburgerProfileSelect} className='flex items-center gap-2 px-5 py-2 pl-6'>
                <img className='h-6' src={userIcon} alt="user icon" />
                <span className='font-medium text-start hover:underline'>Profile</span>
              </button>
              <div
              ref={hamburgerProfileRef}
              className='absolute bottom-0 left-0 hidden w-full bg-white border rounded border-slate-400 hover:cursor-default'
                >
                <div className="flex flex-col items-start w-full">
                  <div
                    className="w-full p-2 px-6 text-left rounded-b-none rounded-xl"
                  >
                    {currentUser?.email}
                  </div>
                  <div className='w-full p-2 px-6 text-left'>
                    Credits: 1 demo credit
                  </div>
                  <button
                    onClick={() => {}}
                    className="w-full p-2 px-6 text-left hover:bg-gray-200 focus:outline-none"
                  >
                    My Classes
                  </button>
                  <button
                    onClick={logoutClick}
                    className="w-full p-2 px-6 text-left rounded-lg rounded-t-none hover:bg-red-100 focus:outline-none"
                  >
                    Logout
                  </button>
                  </div>
                  
              </div>
            </>
            : null
            }
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
                  onClick={() => { languageSelect('English') }}
                  className="flex items-center w-full p-2 text-left rounded-b-none rounded-xl hover:bg-gray-200 focus:outline-none"
                >
                  <WorldFlag code="GB" style={{ width: '20px', height: '20px', marginRight: '8px' }} /> {/* Flag for England */}
                  English
                </button>
                <button
                  onClick={() => { languageSelect('Russian') }}
                  className="flex items-center w-full p-2 text-left rounded-t-none rounded-xl hover:bg-gray-200 focus:outline-none"
                >
                  <WorldFlag code="RU" style={{ width: '20px', height: '20px', marginRight: '8px' }} /> {/* Flag for Russia */}
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
