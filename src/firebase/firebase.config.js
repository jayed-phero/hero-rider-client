// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ1lvD8aZoGq6OZUyegXRZdw2569b37r0",
  authDomain: "computerplusinstitute.firebaseapp.com",
  projectId: "computerplusinstitute",
  storageBucket: "computerplusinstitute.appspot.com",
  messagingSenderId: "895698732988",
  appId: "1:895698732988:web:220382f6dabee6ab79cdb9",
  measurementId: "G-D5XH59CLYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app