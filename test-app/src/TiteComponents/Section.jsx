import React from 'react'

const Section = (props) => {
  const { section } = props;
  return (
    <div>
        <p>{section.start_time} : {section.allotted_time}</p>
    </div>
  )
}

export default Section