import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/authContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, loginWithGoogle } = useAuth(); // Destructure context functions
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    try {
      await register(email, password);
      console.log('User registered successfully');
      navigate('/'); // Redirect after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      console.log('Google register successful');
      navigate('/'); // Redirect after successful Google login
    } catch (error) {
      console.error('Error with Google register:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-start">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-start">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword" // Update the id to match the value variable
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <div className='text-sm'>Already have an account? <Link className='text-blue-600 hover:underline' to="/login">Login</Link></div>
        <div className="flex items-center justify-between flex-basis-1/3">
          <hr className="flex-1 border-gray-300" />
          <div className="px-4 text-center">or</div>
          <hr className="flex-1 border-gray-300" />
        </div>
        <div className='flex items-center justify-between w-full px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100'>
          <FcGoogle className='w-6 h-6 text-gray-500' />
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-500 rounded-md"
          >
            Register with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
