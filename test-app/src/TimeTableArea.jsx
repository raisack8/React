import React from 'react'
import StageArea from './StageArea'

const TimeTableArea = ({stages}) => {
  return (
    <div class="border border-black">
      <div class="flex">
      {stages.map((da) => 
       <li key={da.id}>
        {da.id}, 
        {da.stage_id}, 
        {da.start_time}, 
        {da.allotted_time}, 
        {da.artist_name}
        </li>)}
        <StageArea id={stages.id}/>
        <StageArea id={stages.id}/>
        <StageArea id={stages.id}/>
      </div>
    </div>
  )
}

export default TimeTableArea