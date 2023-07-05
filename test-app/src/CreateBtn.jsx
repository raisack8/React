import React, { useContext } from 'react';
import MyContext from '.';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const CreateBtn = ({wholeTime}) => {

  const contextData = useContext(MyContext)
  const navigate  = useNavigate ();
  const createMyTite=async()=>{
    try {
      const dataToSend = {
        id: contextData.sectionData
      };
      // POSTリクエストを送信
      const response = await axios.post('http://127.0.0.1:8000/api/api/', dataToSend);

      // レスポンスをログに表示
      if(Object.keys(response.data.message).length===0){
        alert("1つ以上選んで下さい。")
        return;
      }
      navigate('/test',{state: {
        'data':response.data,
        'wholeTime':wholeTime
      }});

    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <div>
      <button type="button" 
        className="text-blue-700 border border-blue-700 
          hover:bg-blue-700 hover:text-white 
          focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-full text-sm p-2.5 text-center 
          inline-flex items-center"
        onClick={()=>createMyTite()}>
        <span className='p-2 text-xl'>GO</span>
      </button>
      <button >Push</button>
    </div>
  );
};


export default CreateBtn;
