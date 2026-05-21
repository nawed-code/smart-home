"use strict"

console.log("Hi console");
let lampOn = document.getElementById("lamp"); 
lampOn.addEventListener("click",function(){
    
});

/*@@@@@@@@@@@@@    Music   @@@@@@@@@@@@@@@*/

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
    play.innerHTML="Pause";
});

next.addEventListener("click",()=>{
    currentSrc++;
    if(currentSrc >= songs.length){
        currentSrc = 0;
    };
    audio.src= songs[currentSrc];
    audio.play();
    play.innerHTML="Pause";
    
});

/*@@@@@@@@@@@@@    Température   @@@@@@@@@@@@@@@*/

let btnHeater = document.querySelector(".card-temp button");
btnHeater.addEventListener("click",Heater);
function Heater(event){
    if(btnHeater.textContent==="Chauffage allumé"){
        btnHeater.textContent="Chauffage éteint";
        document.getElementById("bar").style.display="none";
    }
    else{
        btnHeater.textContent="Chauffage allumé";
        document.getElementById("bar").style.display="block";
        document.getElementById("temp-range").addEventListener("mousemove",()=>{
        let tempValue = document.getElementById("temp-range").value;
        
        if( tempValue >= 0 && tempValue <= 11){
            document.querySelector(".card-temp h2").textContent="Température Basse "+tempValue+"c°";
            document.querySelector(".card-temp").style.backgroundColor = "white";
        }
        else if( tempValue >= 12 && tempValue <= 32){
            document.querySelector(".card-temp").style.backgroundColor = "#59bd6b";
            document.querySelector(".card-temp h2").textContent="Température Moyenne "+tempValue+"c°";
        }
        else if( tempValue >= 33 && tempValue <= 45){
            document.querySelector(".card-temp").style.backgroundColor = "#b46d3eff";
            document.querySelector(".card-temp h2").textContent="Température Elevée "+tempValue+"c°";
        }
        else{
            document.querySelector(".card-temp").style.backgroundColor = "#ee0505ff";
            document.querySelector(".card-temp h2").textContent="Température Trop elevée "+tempValue+"c°";
        }
        
        })
    }
}
/*document.getElementById("temp-range").addEventListener("mousemove",()=>{
    let tempValue = document.getElementById("temp-range").value;
    //console.log(tempValue);
    let x =1;
    if( tempValue >= 0 && tempValue <= 11){
        document.querySelector(".card-temp h2").textContent="Température Basse "+tempValue+"c°";
        document.querySelector(".card-temp").style.backgroundColor = "white";
    }
    else if( tempValue >= 12 && tempValue <= 32){
        document.querySelector(".card-temp").style.backgroundColor = "#59bd6b";
        document.querySelector(".card-temp h2").textContent="Température Moyenne "+tempValue+"c°";
    }
    else if( tempValue >= 33 && tempValue <= 45){
        document.querySelector(".card-temp").style.backgroundColor = "#b46d3eff";
        document.querySelector(".card-temp h2").textContent="Température Elevée "+tempValue+"c°";
    }
    else{
        document.querySelector(".card-temp").style.backgroundColor = "#ee0505ff";
        document.querySelector(".card-temp h2").textContent="Température Trop elevée "+tempValue+"c°";
    }
    
})*/

/*@@@@@@@@@@@@@    Sécurité   @@@@@@@@@@@@@@@*/

let security = document.getElementById("security");
let btn = document.querySelector(".card-security button");
let h5 = document.createElement("h5");
let img = document.createElement("img");

btn.addEventListener("click",()=>{
    if(btn.textContent ==="On"){
        btn.textContent="Off";
        btn.style.color="white";
        btn.style.backgroundColor="black";
        h5.textContent="Votre maison n'est pas en sécurité";
        h5.style.color ="red";
        img.setAttribute("src","image/open.jpg");
        img.setAttribute("alt","warning-icon");
        security.appendChild(h5);
        security.appendChild(img);
        security.classList.add("open");
    }
    else{
        btn.textContent="On";
        btn.style.color="black";
        btn.style.backgroundColor="green";
        h5.textContent="Votre maison est en sécurité";
        h5.style.color ="green";
        img.setAttribute("src","image/close.png");
        img.setAttribute("alt","safety-icon");
        security.appendChild(h5);
        security.appendChild(img);
        security.classList.remove("open");
        security.classList.add("close");
    }
})




