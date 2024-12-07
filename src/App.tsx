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
import TeacherProfile from './pages/Teacher_Profile';
import Modals from './components/Modals/Modals';
import My_Classes from './pages/My_Classes';
import TestElement from './components/TestElement/TestElement';
import EmailVerifiedPage from './pages/Email_Verified';

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
        <Modals />
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
          <Route path="/teacher/:teacherId" element={<TeacherProfile />} />
          <Route path="/my-classes" element={<My_Classes />} />
          <Route path="/test" element={<TestElement />} />
          <Route path="email-verification" element={<EmailVerifiedPage />} />
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
