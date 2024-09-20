import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { useAuth } from '../../context/authContext';

const NavBar: React.FC = () => {
  const { t: lang, i18n: langManager } = useTranslation(); // Rename to lang and langManager
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    langManager.changeLanguage(selectedLanguage); // Change the language
  };

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Redirect to the home page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        {/* Left side: Logo */}
        <div className="text-xl font-bold" onClick={() => handleNavClick("/")}>
          {lang('nav.logo')} {/* Use translation for logo */}
        </div>

        {/* Right side: Navigation Links */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">{lang('nav.languages')}</button>
          <button className="text-gray-700 hover:text-gray-900">{lang('nav.teachers')}</button>
          {!isAuthenticated ? (
            <>
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => handleNavClick("/login")}
              >
                {lang('nav.login')} {/* Use translation for Login */}
              </button>
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => handleNavClick("/register")}
              >
                {lang('nav.register')} {/* Use translation for Register */}
              </button>
            </>
          ) : (
            <button 
              className="text-gray-700 hover:text-gray-900"
              onClick={handleLogout}
            >
              {lang('nav.logout')} {/* Use translation for Logout */}
            </button>
          )}

          {/* Language Selector */}
          <select
            onChange={handleLanguageChange}
            className="p-1 border border-gray-300 rounded-md"
          >
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
