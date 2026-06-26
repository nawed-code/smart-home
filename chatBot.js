"use strict"
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
    }
    else if(message.trim() === "tu vas bien"){
        div.textContent ="Je vais bien, merci";
    }
    else{
        div.textContent ="Je ne comprends pas";
    }
    messages.appendChild(div);

}

