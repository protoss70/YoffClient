import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yoffLogo from "../../assets/logo.jpeg";
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
    <nav className="fixed top-0 left-0 w-full px-20 bg-white shadow h-28">
      <div className="container flex items-center justify-between mx-auto">
        
        {/* LOGO */}
        <div className='flex items-center h-28'>
          <img className='h-24' src={yoffLogo} alt="Yoff Logo" />
        </div>

        {/* Mid Nav Buttons */}
        <div className='flex justify-between font-poppins gap-9'>
          <button onClick={() => {handleNavClick("/")}} className='px-5 py-1 font-semibold text-white bg-main rounded-2xl hover:underline'>Home</button>
          <button onClick={() => {handleNavClick("/languages")}}className='hover:underline'>Languages</button>
          <button onClick={() => {handleNavClick("/#pricing")}}className='hover:underline'>Pricing</button>
          <button onClick={() => {handleNavClick("/teachers")}}className='hover:underline'>Teachers</button>
        </div>

        {/* End Nav Buttons */}
        <div className='flex gap-6 font-poppins'>
          <button className='text-lg font-semibold underline text-main'>Login</button>
          <button className='px-3 py-2 text-lg font-medium text-center text-white transition-all duration-1000 shadow-inner bg-gradient-to-r from-main to-secondary rounded-xl'>Schedule Class</button>
          <div className='relative font-poppins'>
            <button onClick={toggleLanguageSelect} className='flex items-center gap-2 px-2 py-2 bg-white border border-black rounded-xl'>
              <img className='h-10' src={globeIcon} alt="globe icon" />
              <span className='font-medium'>{language}</span>
            </button>
            {/* Language select field */}
            <div ref={languageSelectRef} className='absolute left-0 w-full p-4 bg-white border border-black top-16 rounded-xl hover:cursor-default'>
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
