// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hsl-videos.firebaseapp.com",
  projectId: "hsl-videos",
  storageBucket: "hsl-videos.appspot.com",
  messagingSenderId: "1094207130034",
  appId: "1:1094207130034:web:48667388a022edd804bcab",
  measurementId: "G-27DS9W3K6Y",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
