import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Section from './Section';


const StageArea = (props) => {
  const { stageInfo, sections } = props;
  
  // ここでやること
  // 時間を見て、どこからSectionCompを書くかを判定する。
  // 1,時間リストを作る。
  // 　→予め作られているので再利用する？
  //　　or 時間Dict? {'9:00':false,'9:05':true,}
  //       mapでループしてtrueの物はsectionsから探してComp挿入？

  return (
    <div className=''>
      <div key={stageInfo.id}
        className='w-60 h-full'
        style={{backgroundColor:stageInfo.color}}>
        <div key={uuidv4()} className='flex h-16 items-center justify-center text-white text-white-outline text-4xl font-extrabold'>
          {stageInfo.name}
        </div>
        {sections.map((sec)=>{
            console.log(sec);
            return(
              <Section section={sec} key={sec.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default StageArea