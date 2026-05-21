"use strict"

console.log("Hi console");
let lampOn = document.getElementById("lamp"); 
lampOn.addEventListener("click",function(){
    
});

let audio = document.getElementById("audio");
audio.style.display="none";
let play = document.getElementById("play");
let image = document.querySelector("#music img");

play.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        play.innerHTML="Pause";
        image.classList.toggle("rotate");
    }
    else{
        audio.pause();
        play.textContent="Play";
        image.classList.remove("rotate");
    }
});


const songs = [
    "music/1.mp3",
    "music/2.mp3",
    "music/3.mp3"

];
let back = document.getElementById("back");
let next = document.getElementById("next");
let currentSrc = 0;
audio.setAttribute("src",songs[currentSrc]);

back.addEventListener("click",function(){
    console.log(audio.getAttribute("src"));
    currentSrc--;
    if(currentSrc < 0){
        currentSrc = songs.length -1;
    };
    audio.src = songs[currentSrc];
    audio.play();
});

next.addEventListener("click",()=>{
    currentSrc++;
    if(currentSrc >= songs.length){
        currentSrc = 0;
    };
    audio.src= songs[currentSrc];
    audio.play();
    
});




