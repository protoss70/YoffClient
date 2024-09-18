import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; // Google logo from FontAwesome
import { signInWithEmailAndPasswordHandler, signInWithGoogleHandler } from '../auth/firebaseAuth'; // Adjust the import path as needed

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPasswordHandler(email, password);
      console.log('Login successful');
      // Redirect or update state as needed after successful login
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogleHandler();
      console.log('Google login successful');
      // Redirect or update state as needed after successful login
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-between flex-basis-1/3">
          <hr className="flex-1 border-gray-300" />
          <div className="px-4 text-center">or</div>
          <hr className="flex-1 border-gray-300" />
        </div>
        <div className="flex items-center justify-between w-full px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
          <FcGoogle className="w-6 h-6 text-gray-500" /> {/* Adjust size here */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-2 text-gray-500 rounded-md"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
