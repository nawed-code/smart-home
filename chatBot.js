"use strict"
//const { json } = require("body-parser");

console.log("salut depuis chatBot.js");
let input = document.getElementById("question");
let textBtn = document.getElementById("send");
let messages = document.getElementById("messages");
let container = document.getElementById("container");

textBtn.addEventListener("click",sendMessages);
input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        sendMessages();
    }
})

function sendMessages(){
    let value = input.value;
    if(value.trim() === ""){
        return 
    }
    let div = document.createElement("div");
    div.className = "user-message";
    div.textContent = value;
    messages.appendChild(div);
    botMessages(value);
    input.value ="";
    messages.scrollTop = messages.scrollHeight;    // défillement automatique 
    
}

function botMessages(message){
    let div = document.createElement("div");
    div.className = "bot-message";
    div.textContent = "🤖 Nawed est en train d'écrire...";
    messages.scrollTop = messages.scrollHeight;    // défillement automatique 
    messages.appendChild(div);

    let chatRequete = new XMLHttpRequest();
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
            messages.scrollTop = messages.scrollHeight;   // défillement automatique
         }
        else{
            console.log(`erreur : ${chatRequete.status}`);
        }
    });

    chatRequete.send(JSON.stringify({
        question : message
    }));
    
}

