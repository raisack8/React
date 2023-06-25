import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Section from './Section';
import {timeConvert} from '../utils'


const StageArea = (props) => {
  const { stageInfo, sections, wholeTime } = props;
  
  // ここでやること
  // 時間を見て、どこからSectionCompを書くかを判定する。
  // 1,時間リストを作る。
  // 　→予め作られているので再利用する？
  //　　or 時間Dict? {'9:00':false,'9:05':true,}
  //       mapでループしてtrueの物はsectionsから探してComp挿入？
  
  // 時間オブジェクト配列を作る処理
  const  createTimeList=(startTime, endTime)=> {
    const timeList = [];
    let currentTime = new Date(startTime);
  
    while (currentTime <= endTime) {
      timeList.push({ time: timeConvert(currentTime), flag: false });
  
      currentTime.setMinutes(currentTime.getMinutes() + 5);
    }
  
    return timeList;
  }

  const checkStartTime=(timeList)=>{
    const orgTimeList = timeList;
    sections.map((sec)=>{
      let start_dt = new Date(sec.start_time);
      // 標準時が効いているので時間を合わせる。
      // 地域によって差がでる？
      const utcTime = start_dt.getTime();
      const updatedTime = utcTime - (9 * 60 * 60 * 1000);
      const updatedDateObj = new Date(updatedTime);
      // hh:mmの形式に合わせている
      let dataStr = timeConvert(updatedDateObj);
      timeList.map((time,index)=>{
        if(time.time==dataStr){
          sec.flag = true;
          orgTimeList[index].flag=true
        }
      })
    })
    return orgTimeList;
  }

  let timeList = createTimeList(wholeTime.start,wholeTime.end);
  timeList = checkStartTime(timeList);

  return (
    <div className=''>
      <div key={stageInfo.id}
        className='w-60 h-full'
        style={{backgroundColor:stageInfo.color}}>
        <div key={uuidv4()} className='flex h-16 items-center justify-center text-white text-white-outline text-4xl font-extrabold'>
          {stageInfo.name}
        </div>
        {timeList.map((time)=>{
          if(!time.flag){
            return (
              <p key={uuidv4()}>------------{time.time}</p>
            )
          }else{
            // 0625とりあえず次はこのelse節を表示すること。
            // 今は表示されていない
            // 上で宣言したtimeListに持ち時間の値も取得させて
            // if節をスキップさせた方がいいか。。
            return(
              <Section section={sections[0]} key={uuidv4()}/>
            )
          }
        })}
      </div>
    </div>
  )
}

export default StageArea