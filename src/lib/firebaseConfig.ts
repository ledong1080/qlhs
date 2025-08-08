import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcP6FMNqxpAAe0w6x9-ExOO5CjYMGJ2ao",
  authDomain: "tin12-312f2.firebaseapp.com",
  projectId: "tin12-312f2",
  storageBucket: "tin12-312f2.appspot.com",
  messagingSenderId: "382162762269",
  appId: "1:382162762269:web:48d766f2c66a2978f6a4f4",
  measurementId: "G-BE5I3HNNQW",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
