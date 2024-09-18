// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ordgebFwMkc6-2Sr94B664GmtH5DvV4",
  authDomain: "yoff-website.firebaseapp.com",
  projectId: "yoff-website",
  storageBucket: "yoff-website.appspot.com",
  messagingSenderId: "209796082544",
  appId: "1:209796082544:web:1032dd74b563faa5e3fdb5",
  measurementId: "G-LQ35N1WJGG"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

export { app, analytics };