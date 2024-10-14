import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing_Page from './pages/Landing_Page';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/Navbar/Navbar';
import { AuthProvider } from './context/authContext'; // Import the AuthProvider
import ForgotPassword from './pages/Forgot_Password';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
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
