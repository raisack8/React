0704 次の課題：
React側で選択したSectionをGoボタンによってAPIにPOST送信して、
選択したSectionのデータを取得することに成功。

取得できたら選択したデータだけを表示するマイタイテページを実装する必要がある。
その際に必要なのが【Router...】
①POST送信がエラーなく終わったら別画面に遷移する処理
②遷移先に選択したSectionを表示する処理
___  
0624 次の課題：  
●StageArea.jsx  
  １.時間リストを作る。  
  　→予め作られているので再利用する？  
  　　or 時間Dict? {'9:00':false,'9:05':true,}  
      mapでループしてtrueの物はsectionsから探してComp挿入？  
  
●Section.jsx  
   １.時間表示の作成  
  　　　allotted_time,start_timeを上手く使って  
  　　　「9:30~10:10」の形式に仕上げる。  
   ２.表示枠の範囲  
  　　　allotted_timeの値次第で縦幅を変更する。  
  　　　(位置決めは前Compで良い気がする...)  
      
___    
0622 次の課題：StageとSectionのモデルの取得に成功。あとは、ステージ毎に横展開して、Sectionを振り分ける。  
