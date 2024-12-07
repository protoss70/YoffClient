import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import successTick from "../assets/success-tick.svg";
import { useAuth } from '../context/authContext';
import { getStartedClick } from '../utility/quick_start_actions';
import { useTranslation } from 'react-i18next';
import { createNotificationEvent } from '../utility/modal_utils';
import { verifyEmail } from '../api/user/getUser';

const EmailVerifiedPage: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const verificationCode = searchParams.get("verificationCode");

    const [emailVerified, setEmailVerified] = useState<boolean | null>(null);

    async function handleVerifyEmail() {
        if (!verificationCode) {
            setEmailVerified(false);
            createNotificationEvent(
                t("notifications.emailVerification.noCode.title"),
                t("notifications.emailVerification.noCode.description"),
                "danger",
                5000
            )
            return;
        }

        const result = await verifyEmail(verificationCode);
        console.log("result", result)
        if (!result.success){
            createNotificationEvent(
                t("notifications.emailVerification.error.title"),
                t("notifications.emailVerification.error.description"),
                "danger",
                4000
            );
            setEmailVerified(false);
            return;
        }

        setEmailVerified(true);
    }

    useEffect(() => {
        handleVerifyEmail();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-poppins">
            {emailVerified === null ? (
                // Loading state
                <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
                    <div className="mb-6">
                        <svg
                            className="w-12 h-12 mx-auto animate-spin text-main"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path
                                d="M4 12a8 8 0 018-8V0l4 4-4 4V8a4 4 0 00-4 4z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <p className="text-lg text-custom_gray">{t("emailVerification.loading.title")}</p>
                </div>
            ) : emailVerified === false ? (
                // Error state
                <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-24 h-24 mx-auto mb-6 text-danger"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    <h1 className="mb-4 text-3xl font-bold text-dark font-gilroy">{t("emailVerification.error.title")}</h1>
                    <p className="mb-6 text-lg text-custom_gray">{t("emailVerification.error.description")}</p>
                    <Link
                        to="/register"
                        className="block px-6 py-3 mb-4 text-lg font-semibold text-white transition-all rounded-lg bg-main hover:bg-secondary"
                    >
                        {t("emailVerification.error.tryAgain")}
                    </Link>
                    <Link to="/" className="block py-3 text-lg font-semibold text-main">
                        {t("emailVerification.error.backToHome")}
                    </Link>
                </div>
            ) : (
                // Success state
                <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
                    <img src={successTick} alt="Success tick" className='w-24 h-24 mx-auto mb-6' />
                    <h1 className="mb-4 text-3xl font-bold text-dark font-gilroy">{t("emailVerification.success.title")}</h1>
                    <p className="mb-6 text-lg text-custom_gray">{t("emailVerification.success.description")}</p>
                    {isAuthenticated ? (
                        <button
                            onClick={() => { getStartedClick(location.pathname, navigate, t) }}
                            className="block w-full px-6 py-3 mb-4 text-lg font-semibold text-white transition-all rounded-lg bg-main hover:brightness-110"
                        >
                            {t("emailVerification.success.scheduleClass")}
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="block px-6 py-3 mb-4 text-lg font-semibold text-white transition-all rounded-lg bg-main hover:bg-secondary"
                        >
                            {t("emailVerification.success.goToLogin")}
                        </Link>
                    )}
                    <Link to="/" className="block py-3 text-lg font-semibold text-main">
                        {t("emailVerification.success.backToHome")}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default EmailVerifiedPage;
