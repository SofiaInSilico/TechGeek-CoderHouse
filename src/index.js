import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1yy501uLg0n0IrTug_Wv4XwSz-MukCyQ",
  authDomain: "techgeek-2d4e9.firebaseapp.com",
  projectId: "techgeek-2d4e9",
  storageBucket: "techgeek-2d4e9.appspot.com",
  messagingSenderId: "789154787357",
  appId: "1:789154787357:web:d04394bfce75b8370c16f4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


