import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yoffLogo from "../../assets/logo.svg";
import globeIcon from "../../assets/globe.svg";

const NavBar: React.FC = () => {
  
  // TODO LANGUAGE: connect language change
  // import { useAuth } from '../../context/authContext';
  // import { useTranslation } from 'react-i18next';
  // const { t: lang, i18n: langManager } = useTranslation(); // Rename to lang and langManager
  // const { isAuthenticated, logout } = useAuth();
  
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");
  const languageSelectRef = useRef<HTMLDivElement | null>(null);

  // TODO LANGUAGE: connect language change functionality
  // const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedLanguage = event.target.value;
  //   langManager.changeLanguage(selectedLanguage); // Change the language
  // };

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const toggleLanguageSelect = () => {
    if (!languageSelectRef || !languageSelectRef.current) return;

    if (languageSelectRef.current.classList.contains("hidden")){
      languageSelectRef.current.classList.remove("hidden");
    }else{
      languageSelectRef.current.classList.add("hidden");
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageSelectRef.current && !languageSelectRef.current.contains(event.target as Node)) {
        console.log('Clicked outside the language selector');
        languageSelectRef.current.classList.add("hidden");
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-24 px-24 bg-white shadow max-1300:px-12 max-900:px-6">
      <div className="flex items-center justify-between w-full">
        
        {/* LOGO */}
        <div onClick={() => handleNavClick("/")} className='flex items-center h-24 mr-28xx hover:cursor-pointer'>
          <img className='h-20 ml-[-5px]' src={yoffLogo} alt="Yoff Logo" />
        </div>

        {/* Mid Nav Buttons */}
        <div className='flex justify-between font-poppins gap-9'>
          <button onClick={() => {handleNavClick("/")}} className='px-5 py-1 font-semibold text-white bg-main rounded-2xl hover:underline'>Home</button>
          <button onClick={() => {handleNavClick("/languages")}}className='hover:underline max-1100:hidden'>How It Works</button>
          <button onClick={() => {handleNavClick("/languages")}}className='hover:underline'>Languages</button>
          <button onClick={() => {handleNavClick("/#pricing")}}className='hover:underline'>Pricing</button>
          <button onClick={() => {handleNavClick("/teachers")}}className='hover:underline'>Teachers</button>
        </div>

        {/* End Nav Buttons */}
        <div className='flex gap-6 p-1 font-poppins'>
          <button onClick={() => {handleNavClick("/login")}} className='font-semibold underline text-main'>
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
            <div ref={languageSelectRef} className='absolute left-0 hidden w-full p-4 bg-white border border-black max-1100:left-auto max-1100:right-0 max-1100:w-28 top-16 rounded-xl hover:cursor-default'>
                <div className="flex flex-col items-start">
                  <label className="flex items-center hover:cursor-pointer">
                    <input onClick={() => {setLanguage("English")}} type="radio" defaultChecked name="language" value="english" className="mr-2" />
                    English
                  </label>
                  <label onClick={() => {setLanguage("Russian")}} className="flex items-center hover:cursor-pointer">
                    <input type="radio" name="language" value="russian" className="mr-2" />
                    Russian
                  </label>
                </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
