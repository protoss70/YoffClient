import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { isAuthenticated, signOutHandler } from '../../auth/firebaseAuth';

const NavBar: React.FC = () => {
  const [language, setLanguage] = useState('English');
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Check authentication state when component mounts
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await isAuthenticated();
        console.log(result);
        setIsAuth(result);
      } catch (error) {
        console.error('Error checking authentication state:', error);
      }
    };

    checkAuth();
  }, []); // Empty dependency array means this runs once on component mount

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const handleNavClick = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        {/* Left side: Logo */}
        <div className="text-xl font-bold" onClick={() => handleNavClick("/")}>
          LOGO
        </div>

        {/* Right side: Navigation Links */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">Languages</button>
          <button className="text-gray-700 hover:text-gray-900">Teachers</button>
          {!isAuth ? (
            <>
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => handleNavClick("/login")} // Handle click event
              >
                Login
              </button>
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => handleNavClick("/register")} // Handle click event
              >
                Register
              </button>
            </>
          ) : (
            <button 
              className="text-gray-700 hover:text-gray-900"
              onClick={() => signOutHandler()} // Handle click event
            >
              Logout
            </button>
          )}

          {/* Language Selector */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="p-1 border border-gray-300 rounded-md"
          >
            <option value="English">English</option>
            <option value="Russian">Russian</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
