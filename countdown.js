// 要素を取得
const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const videos = document.getElementById('videos');
const happys = document.getElementById('happys');
const titles = document.getElementById('titles');
// const currentYear = new Date().getFullYear();


//const now=new Date();//今の時間
//const tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);//明日の0:00
//const differ=tomorrow.getTime()-now.getTime();//明日まであと何ミリ秒か

// 来年の1月1日00:00:00のDateオブジェクトを取得
const birthdayTime = new Date(`2022/06/21 00:00:00`);

// 来年の値をDOMに追加
// year.innerText = birthdayTime;

// カウントダウンの関数
function updateCountdown() {
  // 現在の時刻情報を取得する
  const currentTime = new Date();
  const yearOfTheEvent = currentTime.getFullYear();
  const eventDate = new Date(yearOfTheEvent, 05,21);
  // 現在の時間と新年の時間の差を計算する（ミリ秒単位）
  const diff = birthdayTime - currentTime;
  const now = new Date();

  document.getElementById("videos").style.display ="none";
    
//if (currentTime < birthdayTime){
      // 現在から新年までの日数を計算
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // 時間を計算
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  // 分を計算
  const m = Math.floor(diff / 1000 / 60) % 60;
  // 秒を計算
  const s = Math.floor(diff / 1000) % 60;

  // 取得した時間をDOMに追加
  days.innerText = d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  seconds.innerText = s < 10 ? '0' + s : s;
  videos.style.display ="none";
  //days.style.display ="none"; //   
    
//} else if (birthdayTime <= currentTime){
   // hours.style.display ="none";
    //days.remove();
   //hours.remove();
   //minutes.remove();
 　//seconds.remove();
   //titles.remove(); 
   //year.remove();    
   //videos.style.display ="block";
    //再生    
    //一時停止
    //videos.pause();
    //ロード
    //videos.load();
//}   
 //if (days.remove())  {
   //      videos.play();
//}   
 
//function countdown(){
//const now=new Date();//今の時間
//const tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);//明日の0:00
//const differ=tomorrow.getTime()-now.getTime();//あと何秒か計算
    
    
  // 現在から新年までの日数を計算
  //const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // 時間を計算
  //const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  // 分を計算
  /const m = Math.floor(diff / 1000 / 60) % 60;
  // 秒を計算
  //const s = Math.floor(diff / 1000) % 60;


  // 取得した時間をDOMに追加
  //days.innerText = d;
  //hours.innerText = h < 10 ? '0' + h : h;
  //minutes.innerText = m < 10 ? '0' + m : m;
  //seconds.innerText = s < 10 ? '0' + s : s;


}




// ページロード時に関数を実行
updateCountdown();
// 1秒ごとに関数を実行
setInterval(updateCountdown, 1000);

