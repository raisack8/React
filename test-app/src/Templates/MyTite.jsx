import React from 'react'
import { useLocation } from 'react-router-dom';
import TimeLine from '../TiteComponents/TimeLine';
import TimeTableArea from '../TiteComponents/TimeTableArea';

const MyTite = () => {
  const location = useLocation();
  const data = location.state;




  const testData = [
    {id: 1, appearance_date: "2022-08-03", start_time: '1899-12-30T13:05:00Z', allotted_time: 15, artist_name: 'あびゅるむ',stage_id:1}
    ]
  const stageTest = [{id: 1, stage_id: 1, name: 'MyTite1', place: 'お台場', color: '#999999'}]

    
  console.log(data.data);
  console.log(data.wholeTime);


  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <div className="flex">
        <TimeLine wholeTime={data.wholeTime}/>
        <TimeTableArea stages={stageTest} sections={testData} wholeTime={data.wholeTime}/>

      </div>
    </>
  )
}

export default MyTite