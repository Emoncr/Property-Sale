// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRIBASE_API_KEY ,
  authDomain: "property-sell-401819.firebaseapp.com",
  projectId: "property-sell-401819",
  storageBucket: "property-sell-401819.appspot.com",
  messagingSenderId: "588716927912",
  appId: "1:588716927912:web:a6d64c89172800b05a4b9d",
  measurementId: "G-NQ79YSEFBT"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);