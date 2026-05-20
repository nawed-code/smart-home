"use strict"

console.log("Hi console");
let lampOn = document.getElementById("lamp"); 
lampOn.addEventListener("click",function(){
    
});

let audio = document.getElementById("audio");
audio.style.display="none";
let play = document.getElementById("play");
play.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        play.innerHTML="Pause"
    }
    else{
        audio.pause();
        play.textContent="Play"
    }
});



