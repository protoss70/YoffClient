import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext'; // Import the useAuth hook

const NavBar: React.FC = () => {
  const [language, setLanguage] = useState('English');
  const { isAuthenticated, logout } = useAuth(); // Destructure values from the useAuth hook
  const navigate = useNavigate();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
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
          LOGO
        </div>

        {/* Right side: Navigation Links */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">Languages</button>
          <button className="text-gray-700 hover:text-gray-900">Teachers</button>
          {!isAuthenticated ? (
            <>
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => handleNavClick("/login")}
              >
                Login
              </button>
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => handleNavClick("/register")}
              >
                Register
              </button>
            </>
          ) : (
            <button 
              className="text-gray-700 hover:text-gray-900"
              onClick={handleLogout} // Call handleLogout to sign out
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
