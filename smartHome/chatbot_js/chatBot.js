"use strict"
//const { json } = require("body-parser");

console.log("salut depuis chatBot.js");
console.log("origine de chatbot: ",location.origin);
let input = document.getElementById("question");
let textBtn = document.getElementById("send");
let messages = document.getElementById("messages");
let btnSend = document.getElementById("send");

textBtn.addEventListener("click",sendMessages);
input.addEventListener("keydown",sendByEnter);
let enCours = false;
function sendByEnter(event){
    if(event.key === "Enter"){
        if(enCours){
            event.preventDefault();
            return;
        }
        sendMessages();
    }
};

function sendMessages(){
    let value = input.value;
    if(value.trim() === ""){
        return 
    }
    let div = document.createElement("div");
    div.className = "user-message";
    div.textContent = value;
    messages.appendChild(div);
    input.value ="";
    messages.scrollTop = messages.scrollHeight;    // défillement automatique 
    btnSend.textContent="...";
    btnSend.disabled = true;
    enCours = true;
    botMessages(value);
}

async function botMessages (message){
    let div = document.createElement("div");
    div.className = "bot-message";
    //div.textContent = "🤖 Nawed est en train d'écrire...";
    messages.scrollTop = messages.scrollHeight;             // défillement automatique 
    messages.appendChild(div);

    /*let chatRequete = new XMLHttpRequest();
    chatRequete.open("POST", "http://localhost:3000/chatbot",true);
    chatRequete.setRequestHeader("Content-Type","application/json");
    chatRequete.responseType ="json";
    chatRequete.addEventListener("load",()=>{
        if(chatRequete.status == 200){
                //console.log("hihih");
            let data = chatRequete.response;
                //console.log(data.answer);
            div.textContent = data.answer;
            messages.appendChild(div);
            messages.scrollTop = messages.scrollHeight;             // défillement automatique
            btnSend.innerHTML ='<i class="fa-solid fa-paper-plane"></i>';
            btnSend.disabled = false;
            enCours = false;
            
         }
        else{
            console.log(`erreur : ${chatRequete.status}`);
            btnSend.innerHTML ='<i class="fa-solid fa-paper-plane"></i>';
            btnSend.disabled = false;
            enCours = false;
        }
    });

    chatRequete.send(JSON.stringify({
        question : message
    }));
    */
    let ollamResponse =  await fetch("http://localhost:3000/chatbot",{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            question:message
        })
    });
    let reader = ollamResponse.body.getReader(); // body contient le flux mais flux ne peut pas être lu directement => on utilise getReader
    let decoder = new TextDecoder();
    while(true){
        const{value,done} = await reader.read();  //il nous donne le prochain morceau, qui contient value = text et done = boolien
        if(done){
            console.log("fin du streaming")
            break;
        }
        let chunk = decoder.decode(value); 
        let obj = JSON.parse(chunk);

        console.log(obj.message.content);

    }
    



}

