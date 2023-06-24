import React from 'react'

const Section = (props) => {
  const { section } = props;
  // ここで行うこと(6/24)
  // １.時間表示の作成
  //　　　allotted_time,start_timeを上手く使って
  //　　　「9:30~10:10」の形式に仕上げる。
  // ２.表示枠の範囲
  //　　　allotted_timeの値次第で縦幅を変更する。
  //　　　(位置決めは前Compで良い気がする...)
  return (
    <div>
        <p>{section.id}</p>
        <p>{section.stage_id}</p> 
        <p>{section.start_time}</p> 
        <p>{section.allotted_time}</p> 
        <p>{section.artist_name}</p> 
    </div>
  )
}

export default Section