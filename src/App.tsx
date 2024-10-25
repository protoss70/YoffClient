import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing_Page from './pages/Landing_Page';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/Navbar/Navbar';
import { AuthProvider } from './context/authContext';
import ForgotPassword from './pages/Forgot_Password';
import Footer from './components/Footer/Footer';
import Teacher_Select from './pages/Teacher_Select';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [currentSection, setCurrentSection] = useState<string>(''); // Moved state to App

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <NavBar currentSection={currentSection} /> {/* Pass currentSection to NavBar */}
        <Routes>
          <Route
            path="/"
            element={<Landing_Page setCurrentSection={setCurrentSection} />} // Pass setCurrentSection to Landing_Page
          />
          <Route path="/teachers" element={<Teacher_Select />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
