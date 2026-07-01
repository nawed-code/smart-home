"use strict"

//const { json } = require("body-parser");

console.log("salut depuis chatBot.js");
let input = document.getElementById("question");
let textBtn = document.getElementById("send");
let messages = document.getElementById("messages");

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
    
}

function botMessages(message){
    let div = document.createElement("div");
    div.className = "bot-message";
    if(message.trim() === "salut"){
        div.textContent="Salut, je suis Nawed";
        messages.appendChild(div);

    }
    else if(message.trim() === "hi"){
        div.textContent ="Hi I am Nawed , what can I do for you ?";
        messages.appendChild(div);
    }
    else{

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
            }
            else{
                console.log(`erreur : ${chatRequete.status}`);
            }
        });

        chatRequete.send(JSON.stringify({
            question : message
        }));
    }
}

