import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import {store} from "./redux/store"

// public>index.htmlに紐づいている
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 厳格。バグを厳しく見てくれる
  <React.Fragment>
    {/* Appを囲うことでアプリの全体で使用できる */}
    <Provider store={store}>
    {/* Appだけをレンダー */}
      <App />
    </Provider>
  </React.Fragment>
);

