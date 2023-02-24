// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvbSa-cklDf2WVqj1dNPyTX5JH-0gZA2Q",
  authDomain: "itdproject-12c91.firebaseapp.com",
  projectId: "itdproject-12c91",
  storageBucket: "itdproject-12c91.appspot.com",
  messagingSenderId: "158737123945",
  appId: "1:158737123945:web:69ef810d48d0467799b0f8",
  measurementId: "G-0QSDWHSQZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)