import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1yy501uLg0n0IrTug_Wv4XwSz-MukCyQ",
  authDomain: "techgeek-2d4e9.firebaseapp.com",
  projectId: "techgeek-2d4e9",
  storageBucket: "techgeek-2d4e9.appspot.com",
  messagingSenderId: "789154787357",
  appId: "1:789154787357:web:d04394bfce75b8370c16f4"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


