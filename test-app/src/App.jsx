import React, { useState, useEffect, useContext } from "react";
import TimeTableArea from "./TiteComponents/TimeTableArea";
import ErrorModal from "./CmnComponents/ErrorModal"
import TimeLine from "./TiteComponents/TimeLine";
import axios from "axios"
import CreateBtn from "./CreateBtn";
import MyContext from ".";

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

  const contextVal = useContext(MyContext)

  return (
    <div className="p-16">
      <div>{contextVal.sectionData}</div>
      <ErrorModal isVisibled={true}/>
      <span className="border border-red-500 bg-red-300">{error.message}</span>
      <div className="flex">
        <TimeLine wholeTime={wholeTime}/>
        <TimeTableArea stages={stages} sections={sections} wholeTime={wholeTime}/>
      </div>
      <div className="fixed bottom-12 right-12">
        <CreateBtn></CreateBtn>
      </div>
    </div>
  );
}

export default App;
