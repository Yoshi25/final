// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDngSdLakEPSW9i0omrAmC97p1VQv9Rabc",
  authDomain: "seito-hw-yoshi.firebaseapp.com",
  databaseURL: "https://seito-hw-yoshi-default-rtdb.firebaseio.com",
  projectId: "seito-hw-yoshi",
  storageBucket: "seito-hw-yoshi.appspot.com",
  messagingSenderId: "90539038945",
  appId: "1:90539038945:web:6958ca1d4ff45dc300bfa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);