import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/authContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import { findOrCreateUser } from '../api/user/getUser';
import { createNotificationEvent } from '../utility/modal_utils';
import { getUserGMTOffset } from '../utility/dates';
import { useTranslation } from 'react-i18next';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState(''); // Add state for name
  const { register, loginWithGoogle, setUserData, logout } = useAuth(); // Destructure context functions
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      createNotificationEvent(
        t("notifications.register.passwordMatchError.title"),
        t("notifications.register.passwordMatchError.description"),
        "danger",
        3000
      )
      return;
    }
    try {
      const user = await register(email, password);
      
      if (!user) {
        throw new Error("User not found");
      }

      const token = await user.getIdToken();
      const userData = await findOrCreateUser(token, getUserGMTOffset(), fullName); // Pass name and surname in the request
      setUserData(userData);
      createNotificationEvent(
        t("notifications.register.registerSuccess.title"),
        t("notifications.register.registerSuccess.description"),
        "success"
      );
      navigate('/'); // Redirect after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();

      // If user not found throw error
      if (!user) {
        throw new Error("User not found");
      }

      const token = await user.getIdToken();
      const userData = await findOrCreateUser(token, getUserGMTOffset()); // Pass name and surname in the request
      setUserData(userData);
      createNotificationEvent(
        t("notifications.register.registerSuccess.title"),
        t("notifications.register.registerSuccess.description"),
        "success"
      );
      navigate('/'); // Redirect after successful Google login
    } catch (error) {
      createNotificationEvent(
        t("notifications.register.loginFailed.title"),
        t("notifications.register.loginFailed.description"),
        "danger", 
        5000
      );
      console.error('Error during Google login:', error);
      await logout();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold">{t("registerPage.title")}</h2>
        <form onSubmit={handleRegister} className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-start">
            {t("registerPage.fullNameLabel")}
            </label>
            <input
              type="text"
              id="name"
              value={fullName}
              onChange={handleNameChange}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-start">
            {t("registerPage.emailLabel")}
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
            {t("registerPage.passwordLabel")}
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 text-start">
            {t("registerPage.confirmPasswordLabel")}
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <Button onClick={handleRegister} text={t("registerPage.registerButton")} variant='border' wrapperClasses='!rounded-lg !w-full' buttonClasses='!w-full !px-4 !py-2 !rounded-lg !bg-main !border-main !text-white !text-base font-medium'/>
        </form>
        <div className='text-sm'>{t("registerPage.alreadyHaveAccount")} <Link className='text-blue-600 hover:underline' to="/login">{t("registerPage.loginLink")}</Link></div>
        <div className="flex items-center justify-between flex-basis-1/3">
          <hr className="flex-1 border-gray-300" />
          <div className="px-4 text-center">{t("registerPage.or")}</div>
          <hr className="flex-1 border-gray-300" />
        </div>
        <div className='flex items-center justify-between w-full px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100'>
          <FcGoogle className='w-6 h-6 text-gray-500' />
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-500 rounded-md"
          >
            {t("registerPage.googleRegister")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
