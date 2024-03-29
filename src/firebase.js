// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6pVbeZtLzCt8EbOVTUnhzjBPessPGToY",
  authDomain: "server-audio-bot.firebaseapp.com",
  projectId: "server-audio-bot",
  storageBucket: "server-audio-bot.appspot.com",
  messagingSenderId: "916918441244",
  appId: "1:916918441244:web:0dc65d1e2be010c21dd6d9",
  measurementId: "G-D85P1GJGDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };