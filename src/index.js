import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importing the Global CSS
import "./Styles/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);