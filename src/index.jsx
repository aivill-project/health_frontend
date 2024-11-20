import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('index.jsx is running');  // 추가

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
