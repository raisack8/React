import React from 'react'

const Section = ({data}) => {
  return (
    <div>
      <ul>
       {data.map((da) => 
       <li key={da.id}>
        {da.id}, 
        {da.stage_id}, 
        {da.start_time}, 
        {da.allotted_time}, 
        {da.artist_name}
        </li>)}
      </ul>
    </div>
  )
}

export default Section