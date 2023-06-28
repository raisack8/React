import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/state';

const Section = (props) => {
  const { section } = props;

  const dispatch = useDispatch();
  const [clickFlg, setClickFlg] = useState(false);

  // const secListDispatch = () => {
  //   dispatch(add());
  // };

  const toggleClickFlg = () => {
    setClickFlg(!clickFlg);
    setTimeout(() => {
      dispatch(add(section.id));
    }, 0);
  };


  const notChoise = 'bg-white';
  const choiced = 'bg-red-200';
  const allottedTime = parseInt(section.allotted_time);
  const repeatCount = Math.floor(allottedTime / 5); // allottedTimeを5で割った商を取得

  const formatTime = (dateTime) => {
    const dateObj = new Date(dateTime);
    const hours = dateObj.getUTCHours(); // 標準時に9時間を加算
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const startTime = formatTime(section.start_time);
  const endTime = new Date(section.start_time);
  endTime.setMinutes(endTime.getMinutes() + allottedTime);
  const endTimeString = formatTime(endTime);

  const repeatedElements = Array.from({ length: repeatCount }, (_, index) => {
    if (index === 0) {
      return (
        <div className={`mx-2 mt-1 rounded-t-md ${clickFlg ? choiced : notChoise}`} 
          key={index}>
          <div className='mx-1'>
            <p>{startTime}~{endTimeString}</p>
          </div>
        </div>
      );
    } else if (index === 1) {
      return (
        <div className={`mx-2 pt-1 ${clickFlg ? choiced : notChoise}`} 
          key={index}>
          <div className='mx-2'>
            {section.artist_name}
          </div>
        </div>
      );
    } else if (index === repeatCount-1) {
      return (
        <div className={`mx-2 pt-1 rounded-b-md ${clickFlg ? choiced : notChoise}`} 
          key={index}>
          <br />
        </div>
      );
    } else {
      return (
        <div className={`mx-2 pt-1 ${clickFlg ? choiced : notChoise}`} key={index}>
          <br />
        </div>
      );
    }
  });

  
  return (
    <div onClick={toggleClickFlg}>
      {repeatedElements}
    </div>
  );
};

export default Section;