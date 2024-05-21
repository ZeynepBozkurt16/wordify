/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyDzqL8F3aFcWAewPUBRVG0MijwBSAjpayI",
  authDomain: "my-auth-app-98fc2.firebaseapp.com",
  projectId: "my-auth-app-98fc2",
  storageBucket: "my-auth-app-98fc2.appspot.com",
  messagingSenderId: "849848450553",
  appId: "1:849848450553:web:438674dd04521846c15128",
  measurementId: "G-DLM519D9FE"
};
// Firebase'i başlat
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
