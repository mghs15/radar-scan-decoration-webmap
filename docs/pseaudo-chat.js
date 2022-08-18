
const members = ["Akane", "Kaito", "Saya", "Taizou", "Hana", "Masaki", "Yayoi", "Watage", "system"];

const messageSet = {
  "template": [
    "おはよう",
    "大丈夫？",
    "元気？",
    "元気出してよ",
    "おつかれ",
    "今無理",
    "今行く",
    "なら、問題ない",
    "お腹すいた……",
    "お花咲いてる",
    "これで終了",
    "情報収集お願い",
    "聞こえてる？"
  ],
  "system": [
    "warnign: this app could be draining battery",
    "warnign: some nonsense numbers on the screen",
    "warnign: messages are all nonsense",
    "warnign: your messages aren't sent anywhere outside your device"
  ]
};

const updateMessage = () => {
  
  let html = "";
  messageBox.slice(-3).forEach( line => {
    
    html += line;
  
  });
  
  if(html){
    document.getElementById("message-area").innerHTML = html;
  }
  
  const nextId = setTimeout(() => {
    //メッセージボックスを非表示にするなどの処理があればここに記述
  }, 3000);
  
  const interval = Math.random() * 10 * 1000;
  setTimeout(setRandomMessage, interval, nextId);
  
}

const setRandomMessage = ( timeoutID = 0 ) => {
  
  if(timeoutID){
    clearTimeout(timeoutID)
  }
  
  
  const n1 = members.length;
  const r1 = Math.floor(Math.random() * n1 );
  const p = members[r1];
  
  const messages = messageSet[p] || messageSet["template"];
  const n2 = messages.length;
  const r2 = Math.floor(Math.random() * n2 );
  const m = messages[r2];
  
  const date = new Date();
  const tim = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  
  messageBox.push(`<div class='message-line'><div class='person'>${p}</div><div class='message'>${m}</div><div class='time'>[${tim}]</div></div>`);
  
  updateMessage();
  
}


const messageBox = [
];


const sendMessage = () => {
  
  let yourMessage = document.getElementById("inputYourText").value;
  
  yourMessage = yourMessage.replace(/&/g,"&amp;")
    .replace(/"/g,"&quot;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/'/g, "&#39;");
  
  if(!yourMessage) return;
  
  const date = new Date();
  const tim = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  messageBox.push(`<div class='message-line your-line'><div class='person'>あなた</div><div class='message'>${yourMessage}</div><div class='time'>[${tim}]</div></div>`);
  
  document.getElementById("inputYourText").value = "";
  
  updateMessage();
  
}

const closeMessageBox = () => {
  document.getElementById("message-box").style.display = "none";
}

const showMessageBox = () => {

  let html = "";
  messageBox.forEach( line => {
    
    html += line;
  
  });
  
  if(html){
    html += "<div id='messageBoxFooter'>";
    html += "<span class='button' id='reloadMessageBoxButton' onclick='showMessageBox();'>更新</span>";
    html += "<span class='button' id='closeMessageBoxButton' onclick='closeMessageBox();'>閉じる</span>";
    html += "</div>";
    document.getElementById("message-box").innerHTML = html;
    document.getElementById("message-box").style.display = "block";
  }
  
}

