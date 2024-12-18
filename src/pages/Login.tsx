import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/authContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import { createNotificationEvent } from '../utility/modal_utils';
import { findOrCreateUser } from '../api/user/getUser';
import { getUserGMTOffset } from '../utility/dates';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginWithGoogle, setUserData, logout } = useAuth(); // Destructure context functions
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const user = await login(email, password);
      console.log(user)
      if (!user){
        throw new Error("User not found")
      }
      const token = await user.getIdToken();
      const userData = await findOrCreateUser(token, getUserGMTOffset());
      setUserData(userData);
      createNotificationEvent(
        t("notifications.login.emailLogin.title"),
        t("notifications.login.emailLogin.description", {email: email}),
        "success"
      );
      navigate('/');
    } catch (error) {
      createNotificationEvent(
        t("notifications.login.loginFailed.title"),
        t("notifications.login.loginFailed.description"),
        "danger", 
        5000
      );
      console.error('Error during login:', error);
      await logout();
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();

      // If user not found throw error
      if (!user){
        throw new Error("User not found")
      }

      const token = await user.getIdToken();
      const userData = await findOrCreateUser(token, getUserGMTOffset());
      setUserData(userData);
      console.log("user data", userData);
      createNotificationEvent(
        t("notifications.login.googleLogin.title"),
        t("notifications.login.googleLogin.description"),
        "success"
      );
      navigate('/'); // Redirect after successful Google login
    } catch (error) {
      createNotificationEvent(
        t("notifications.login.loginFailed.title"),
        t("notifications.login.loginFailed.description"),
        "danger", 
        5000
      );
      console.error('Error during Google login:', error);
      await logout();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold">{t("loginPage.title")}</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-start">
            {t("loginPage.emailLabel")}
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
            {t("loginPage.passwordLabel")}
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
          <div className=''><Link className='text-sm text-blue-600 hover:underline' to="/forgot-password">{t("loginPage.forgotPassword")}</Link></div>
          <Button onClick={handleLogin} text={t("loginPage.loginButton")} variant='border' wrapperClasses='!rounded-lg !w-full' buttonClasses='!w-full !px-4 !py-2 !rounded-lg !bg-main !border-main !text-white !text-base font-medium'/>
        </form>
        <div className='text-sm'>{t("loginPage.noAccount")} <Link className='text-blue-600 hover:underline' to="/register">{t("loginPage.registerLink")}</Link></div>
        <div className="flex items-center justify-between flex-basis-1/3">
          <hr className="flex-1 border-gray-300" />
          <div className="px-4 text-center">{t("loginPage.or")}</div>
          <hr className="flex-1 border-gray-300" />
        </div>
        <div className="flex items-center justify-between w-full px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
          <FcGoogle className="w-6 h-6 text-gray-500" />
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-500 rounded-lg"
          >
            {t("loginPage.googleLogin")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
