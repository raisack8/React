import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// public>index.htmlに紐づいている
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 厳格。バグを厳しく見てくれる
  <React.Fragment>
    {/* Appだけをレンダー */}
    <App />
  </React.Fragment>
);

