https://qiita.com/izuna385/items/3bf79497dee8c1faa693　　
Dockerを使ってみよう。


Githubにタスク管理機能があるのね。。そちらを活用しよう。

![image](https://github.com/raisack8/React/assets/82768079/6df633c0-1073-420f-abf7-9e526534debe)


0705 次の課題：  　　             
ルーター機能も追加完了。     
この後はいよいよマイタイテを作成する。   
想定手順は以下      
  
1,選択したSectionをDjangoで受け取る(済)  
  
2,受け取った値の中身を見ていく。  
　　※今実装してある返却値は見直す必要がある  
　→仮に、「MyTite1,MyTite2,MyTite3」の3stageを作っておき、   
　　Sectionリストを時間早い順に並べる。  
      
　【A】WholeTimeを5分毎に見ていき、StartTimeが一致しているものを見つけたら  
　　allotted_time分時間を飛ばす。  
　　そのSectionをMyTite1リストに格納。  
　　確認したSectionはリストから除外(Sectionをコピーしておく？)
      
　【B】終了時間まで繰り返す。選択したSectionの時間が被っていたら		  
　　リストの中に残っているはず。		  
　　　→最後まで見終わったらリストの中身を確認する		  
　　　　リストの中にまだSectionがあれば		   
　　　　今度はそれらをMyTite2に格納、選択したSectionをリストから除外  
  
　【C】MyTite4まで行ってまだリストの中にSectionが残っていたらエラーを返しちゃう。  
  
3,React側には普通のタイムテーブルと同様、ステージ毎のオブジェクト配列が渡される。  
　Titeと同じように並べていく。  
  
  ※そのSectionがどのステージの物なのかをどこかに目印を置きたい。  
  　例)Sectionの時間の横にStageカラーを付けておく？  
   　　→　10:00~10:30　●  
  
  
  
・・・今後の展望  
●作ったマイタイテはDBに保存する。  
　…カラムにSectionIdリストをぶっこむか...    
●LINEログイン機能    
　…LINEログインしたらDBに保存できるようにする    
●フッター作成  
●モバイルレイアウト修正  
●MyオリジナルSection作成  
●Sectionをクリック→Artistの詳細(idを頼りにDBを探す)  
      
___  
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
0622 次の課題：  
StageとSectionのモデルの取得に成功。  
あとは、ステージ毎に横展開して、Sectionを振り分ける。  
