import React, { createContext, useState, useEffect, useContext, ReactNode, SetStateAction } from 'react';
import {
  signInWithEmailAndPasswordHandler,
  registerWithEmailAndPasswordHandler,
  signInWithGoogleHandler,
  signOutHandler,
  getCurrentUser,
  isAuthenticated,
  sendPasswordResetEmailHandler // Import this function
} from '../auth/firebaseAuth';
import { User } from 'firebase/auth';
import { UserDataType } from '../utility/types';
import { findOrCreateUser } from '../api/user/getUser';
import { getUserGMTOffset } from '../utility/dates';

// Define the shape of your context data
interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  register: (email: string, password: string) => Promise<User | null>;
  loginWithGoogle: () => Promise<User | null>;
  logout: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>; // Updated to include this
  isAuthenticated: boolean;
  userData: UserDataType | null;
  setUserData: React.Dispatch<SetStateAction<UserDataType | null>>;
  resetUserCache: () => void;
}

const CACHE_EXPIRY_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

// Create the context with the initial value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  // Load cached userData from localStorage on mount
  useEffect(() => {
    const cachedUserData = localStorage.getItem('userData');
    const cachedTimestamp = localStorage.getItem('userDataTimestamp');

    if (cachedUserData && cachedTimestamp) {
      const cacheAge = Date.now() - Number(cachedTimestamp);
      if (cacheAge < CACHE_EXPIRY_TIME) {
        // Cache is still valid
        setUserData(JSON.parse(cachedUserData));
        console.log('LOADED CACHE');
      } else {
        // Cache has expired
        console.log('CACHE EXPIRED');
        localStorage.removeItem('userData');
        localStorage.removeItem('userDataTimestamp');
      }
    }
  }, []);

  // Cache userData in localStorage whenever it changes
  useEffect(() => {
    async function getUserData() {
      if (!currentUser) return;
      const token = await currentUser.getIdToken();
      function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      await sleep(5000);
      if (!userData){
        const userD = await findOrCreateUser(token, getUserGMTOffset());
        setUserData(userD);
      }
    }

    const cachedUserData = localStorage.getItem('userData');
    if (!currentUser) {
      localStorage.removeItem('userData');
      localStorage.removeItem('userDataTimestamp');
    }

    if (userData) {
      // Cache data with timestamp
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('userDataTimestamp', Date.now().toString());
      console.log('SET CACHE');
    } else if (cachedUserData) {
      setUserData(JSON.parse(cachedUserData));
      console.log('LOADED CACHE');
    } else {
      getUserData();
    }

    console.log(userData);
  }, [userData, currentUser]);

  useEffect(() => {
    // Check for authenticated user when the component mounts
    const checkAuthStatus = async () => {
      const authenticated = await isAuthenticated();
      setIsAuth(authenticated);
      if (authenticated) {
        const user = getCurrentUser();
        setCurrentUser(user);
      }
    };
    checkAuthStatus();
  }, []);

  function resetUserCache() {
    // Remove user data and timestamp from localStorage
    localStorage.removeItem('userData');
    localStorage.removeItem('userDataTimestamp');
    
    // Set userData state to null
    setUserData(null);
    console.log('CACHE RESET');
  }

  // Function to handle login with email and password
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPasswordHandler(email, password);
      const user = getCurrentUser();
      setCurrentUser(user);
      setIsAuth(true);
      return user;
    } catch (error) {
      console.error('Failed to log in:', error);
      throw error;
    }
  };

  // Function to handle registration with email and password
  const register = async (email: string, password: string) => {
    try {
      await registerWithEmailAndPasswordHandler(email, password);
      const user = getCurrentUser();
      setCurrentUser(user);
      setIsAuth(true);
      return user;
    } catch (error) {
      console.error('Failed to register:', error);
      throw error;
    }
  };

  // Function to handle login with Google
  const loginWithGoogle = async () => {
    try {
      await signInWithGoogleHandler();
      const user = getCurrentUser();
      setCurrentUser(user);
      setIsAuth(true);
      return user;
    } catch (error) {
      console.error('Failed to log in with Google:', error);
      throw error;
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await signOutHandler();
      setCurrentUser(null);
      setUserData(null); // Clear userData on logout
      setIsAuth(false);
      localStorage.removeItem('userData'); 
    } catch (error) {
      console.error('Failed to log out:', error);
      throw error;
    }
  };

  // Function to send password reset email
  const sendPasswordResetEmail = async (email: string): Promise<void> => {
    try {
      await sendPasswordResetEmailHandler(email); // Call the handler from firebaseAuth
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw error;
    }
  };

  // Context value to provide
  const contextValue: AuthContextType = {
    currentUser,
    login,
    register,
    loginWithGoogle,
    logout,
    userData,
    setUserData,
    sendPasswordResetEmail, // Provide this in the context
    isAuthenticated: isAuth,
    resetUserCache,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
