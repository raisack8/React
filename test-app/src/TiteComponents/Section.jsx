import React from 'react';

const Section = (props) => {
  const { section } = props;

  const allottedTime = parseInt(section.allotted_time);
  const repeatCount = Math.floor(allottedTime / 5); // allottedTimeを5で割った商を取得

  const repeatedElements = Array.from({ length: repeatCount }, (_, index) => {
    if (index === 0) {
      return (
        <div className='mx-2 mt-1 bg-white' key={index}>
          {section.start_time}
        </div>
      );
    } else if (index === 1) {
      return (
        <div className='mx-2 pt-1 bg-white' key={index}>
          {section.artist_name}
        </div>
      );
    } else {
      return (
        <div className='mx-2 pt-1 bg-white' key={index}>
          <br />
        </div>
      );
    }
  });
  
    console.log(section)
  return (
    <div>
      {repeatedElements}
    </div>
  );
};

export default Section;