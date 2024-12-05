import React, { useState } from 'react';
import { useAuth } from '../context/authContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const { sendPasswordResetEmail } = useAuth(); // Destructure context function
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordReset = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(email);
      console.log('Password reset email sent!');
      navigate('/login'); // Redirect after sending the email
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('Failed to send password reset email. Please try again.'); // Optional: Alert the user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold">{t("forgotPassword.reset")}</h2>
        <form onSubmit={handlePasswordReset} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-start">
            {t("forgotPassword.email")}
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
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            {t("forgotPassword.sendResetRequest")}
          </button>
        </form>
        <div className='text-sm'>
        {t("forgotPassword.remember")}&nbsp;<Link className='text-blue-600 hover:underline' to="/login">{t("forgotPassword.login")}</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
