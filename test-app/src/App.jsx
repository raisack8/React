
// import './App.css';

import React, { useState, useRef } from "react";
import Section from "./Section";
import TimeTableArea from "./TimeTableArea";
import axios from "axios"
// import Api from "./Api";

function App() {
  // useStateは変数を監視するために使われる
  // Vue,computeみたいな。初期値を設定できるTodo1
  
  // setTodosの役割は値を操作できる
  const[sections, setSections] = useState([]);
  const[stages, setStages] = useState([]);
// Djangoと通信したい
// 下記のURLにアクセスしてレスポンスが返ってくれば成功

function getPosts() {
      axios.get('http://127.0.0.1:8000/api/api/')
      .then(res1 => {
        setSections(res1.data);
        console.log(sections);
        
        axios.get('http://127.0.0.1:8000/api/stages/')
        .then(res2 => {
          setStages(res2.data);
          console.log(stages);
        })
      })
  }
    
  // http://127.0.0.1:8000/api/api/
  return (
    <div class="p-16">
      <p>UseEffect...フックスを理解して、無駄なレンダリングを防ごう</p>
      <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      onClick={getPosts}>casfew</button>
      <div>
        {/* StageとSectionのモデルの取得に成功。あとは、ステージ毎に横展開して、Sectionを振り分ける。! */}
        <TimeTableArea stages={stages} sections={sections}/>
      </div>
    </div>
  );
}

export default App;
