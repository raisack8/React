import React,  {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// GCPの接続
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});

// useContext 選択しているセクションIDを配列で保持する
const contextData = {
  sectionData: [],
  setSection: (val) => {
    // sectionDataの中にvalが存在しなかったら追加、存在していたら削除
    if (contextData.sectionData.includes(val)) {
      contextData.sectionData = contextData.sectionData.filter(
        item => item !== val
      );
    } else {
      contextData.sectionData.push(val);
    }
  }
};
const MyContext = createContext(contextData);

// public>index.htmlに紐づいている
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 厳格。バグを厳しく見てくれる
  <MyContext.Provider value={contextData}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </MyContext.Provider>
);

export default MyContext;
