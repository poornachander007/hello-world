// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv_So47nF04UPbckJ65FUH7q7sS9-Vv0o",
  authDomain: "hello-world-25925.firebaseapp.com",
  projectId: "hello-world-25925",
  storageBucket: "hello-world-25925.appspot.com",
  messagingSenderId: "905368348020",
  appId: "1:905368348020:web:b6fe7d2c11a93a0b8b7821",
  measurementId: "G-Y2X48VLNDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
