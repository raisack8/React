import React, { useEffect, useState } from 'react'

const TestArea = ({wholeTime}) => {
  const { start, end } = wholeTime;
  
  useEffect(()=>{
    // console.log(end.getHours());
    // console.log({end});
  },[]);
  
  const[num, setNum]=useState(0)
  const[num2, setNum2]=useState(0)

  const clickButton=()=>{
    setNum(num+1);
    if(num%4==3){
      setNum2(num2+1);
    }
  }


  const color = "red";
  const colorStyle = {
    fontWeight:"bold",
    color:color,
    padding:"0 1rem",
  };

  const stage = [1,2,3,4,5]
  const section = [{"id": 1,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:05:00Z","allotted_time": 15,"artist_name": "あびゅるむ","stage": 1,},
  {"id": 2,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:25:00Z","allotted_time": 30,"artist_name": "東京女子流","stage": 1,},
  {"id": 3,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:55:00Z","allotted_time": 25,"artist_name": "アップアップガールズ(2)","stage": 1,},
  {"id": 4,"appearance_date": "2022-08-03","start_time": "1899-12-30T12:50:00Z","allotted_time": 20,"artist_name": "タイトル未定","stage": 2,},
  {"id": 5,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:10:00Z","allotted_time": 20,"artist_name": "群青の世界","stage": 2,},
  {"id": 6,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:45:00Z","allotted_time": 20,"artist_name": "Rungwanderung","stage": 2,},
  {"id": 7,"appearance_date": "2022-08-03","start_time": "1899-12-30T12:45:00Z","allotted_time": 15,"artist_name": "アルテミスの翼","stage": 3,},
  {"id": 8,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:00:00Z","allotted_time": 15,"artist_name": "ISPY","stage": 3,},
  {"id": 9,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:15:00Z","allotted_time": 15,"artist_name": "わんふぁす!","stage": 3,},
  {"id": 10,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:45:00Z","allotted_time": 15,"artist_name": "純情のカフェラッテ","stage": 3,},
  {"id": 11,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:00:00Z","allotted_time": 15,"artist_name": "ひめもすオーケストラ","stage": 4,},
  {"id": 12,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:45:00Z","allotted_time": 15,"artist_name": "虹のコンキスタドール","stage": 4,},
  {"id": 13,"appearance_date": "2022-08-03","start_time": "1899-12-30T13:25:00Z","allotted_time": 20,"artist_name": "パラディーク","stage": 5,}]
  


  return (
    <>
      <div className='m-10 p-4 border border-red-400'>
        <div>
          num   : {num}
        </div>
        <div>
          num2 : {num2}
        </div>
        <div>
          <button 
            style={colorStyle}
            className="border border-slate-600"
            onClick={clickButton}>
            Button
          </button>
        </div>
      </div>
    </>
  )
}

export default TestArea