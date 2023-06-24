
// import './App.css';

import React, { useState, useEffect } from "react";
import Section from "./TiteComponents/Section";
import TimeTableArea from "./TiteComponents/TimeTableArea";
import TestArea from "./Test/TestArea"
import ErrorModal from "./CmnComponents/ErrorModal"
import TimeLine from "./TiteComponents/TimeLine";
import axios from "axios"

// import Api from "./Api";

function App() {
  // Sectionの値
  const[sections, setSections] = useState([]);
  // Stagesの値
  const[stages, setStages] = useState([]);
  const[error, setError] = useState('')
  const wholeTime = {
    "start":new Date('1899-12-30T09:00:00'),
    "end":new Date('1899-12-30T21:00:00'),
  }

  useEffect(() => {
      getPosts();
  }, []); 

// DjangoのAPIと通信するメソッド
function getPosts() {
      axios.get('http://127.0.0.1:8000/api/api/')
      .then(res1 => {
        setSections(res1.data);
        
        axios.get('http://127.0.0.1:8000/api/stages/')
        .then(res2 => {
          setStages(res2.data);
        })
      }).catch(error => setError(error))
  }
    
  // http://127.0.0.1:8000/api/api/
  return (
    <div className="p-16">
      {/* 思うようなモーダルエラーメッセージを作成できない... */}
      <ErrorModal isVisibled={true}/>
      {/* <TestArea wholeTime={wholeTime}></TestArea> */}
      <span className="border border-red-500 bg-red-300">{error.message}</span>
      <div className="flex">
        {/* StageとSectionのモデルの取得に成功。あとは、ステージ毎に横展開して、Sectionを振り分ける。! */}
        <TimeLine wholeTime={wholeTime}/>
        <TimeTableArea stages={stages} sections={sections} wholeTime={wholeTime}/>
      </div>
    </div>
  );
}

export default App;
