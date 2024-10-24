import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';

const base64Config = import.meta.env.VITE_FIREBASE_CONFIG_BASE64 || '';
console.log(base64Config);
const configString = atob(base64Config);
const firebaseConfig = JSON.parse(configString);

const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

export { app, analytics };