import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import state from './redux/state';

const CreateBtn = () => {
  const createMyTite=()=>{
    console.log("ここにどのSectionを選択しているのかを調べる")
  }
  return (
    <div>
      <button type="button" 
        className="text-blue-700 border border-blue-700 
          hover:bg-blue-700 hover:text-white 
          focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-full text-sm p-2.5 text-center 
          inline-flex items-center"
        onClick={createMyTite}>
        <span className='p-2 text-xl'>GO</span>
      </button>
      <button >Push</button>
    </div>
  );
};


export default CreateBtn;
