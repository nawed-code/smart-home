"use strict"
lucide.createIcons();       //bibliothèque Lucide
console.log("Hi console");
let lampOn = document.getElementById("lamp"); 
lampOn.addEventListener("click",function(){
    
});

/*@@@@@@@@@@@@@    Mode   @@@@@@@@@@@@@@@*/


let btnMode = document.querySelector("#mode button");
let b = document.body;

if(localStorage.getItem("theme") === "mode sombre"){
    btnMode.textContent = "mode claire";
    b.classList.add("dark-theme");
}

btnMode.addEventListener("click",changeMode);
function changeMode(){
    if(btnMode.textContent.trim() === "mode sombre"){
        btnMode.textContent = "mode claire";
        b.classList.add("dark-theme");
        localStorage.setItem('theme','mode sombre');
    }
    else{
        btnMode.textContent='mode sombre';
        b.classList.remove("dark-theme");
        localStorage.setItem('theme',"mode claire");
    }
    
}


/*@@@@@@@@@@@@@    Lamp   @@@@@@@@@@@@@@@*/

let lamp = document.querySelector(".lamp");
let range = document.getElementById("lamp-range");

range.addEventListener("input",()=>{
    let lampValue = range.value;

    if(lampValue < 10){
        lamp.style.color="#d4d299ff";
    }
    else if(lampValue < 30){
        lamp.style.color="#9f9c31ff";
    }
    else if(lampValue < 70){
        lamp.style.color="yellow";
    }
    else{
        lamp.style.color="orange";
    }
})





/*@@@@@@@@@@@@@    Music   @@@@@@@@@@@@@@@*/

let audio = document.getElementById("audio");
audio.style.display="none";
let play = document.getElementById("play");
let image = document.querySelector("#music img");

play.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        play.innerHTML="Paus";
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
    play.innerHTML="Paus";
});

next.addEventListener("click",()=>{
    currentSrc++;
    if(currentSrc >= songs.length){
        currentSrc = 0;
    };
    audio.src= songs[currentSrc];
    audio.play();
    play.innerHTML="Paus";
    
});

/*@@@@@@@@@@@@@    Température   @@@@@@@@@@@@@@@*/

const btnHeater = document.querySelector(".card-temp button");
const tempRange = document.getElementById("temp-range");
const degree = document.getElementById("num");
const cilcius = document.getElementById("c");
btnHeater.addEventListener("click",Heater);

function Heater(){
   
    if(btnHeater.textContent==="On"){
        btnHeater.textContent="Off";
        document.getElementById("bar").style.display="none";
        
    }
    else{
        btnHeater.textContent="On";
        document.getElementById("bar").style.display="block";
        updateTemperatureDisplay();
    }
}
        
tempRange.addEventListener("input",updateTemperatureDisplay);
function updateTemperatureDisplay() {
        if (btnHeater.textContent === "On") {
            let tempValue = tempRange.value;
            degree.textContent = tempValue;

            // Gestion de la couleur selon la température
            if (tempValue > 24) {
                cilcius.style.color = "red";
                degree.style.color = "red";
            } else {
                cilcius.style.color = "blue";
                degree.style.color = "blue";
            }
        }
}

//  XMLHttpRequest avec  Openweathermap.org

const apiKey = "2a9c5a7f19fdf0b8318cbfdc1cecaa41";
let city = "Caen";

const tempExtDisplay = document.getElementById("temp-ext");
const weatherDescDisplay = document.getElementById("weather-desc");

function getExternelWeather(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    let requete = new XMLHttpRequest();

    requete.open("GET",url,true);
    requete.addEventListener("load",responseAnalyse);
    requete.responseType ="json";
    requete.send();
    function responseAnalyse(event){
        
        if(requete.status == 200){
            console.log(requete.response);
            let data = requete.response;
            tempExtDisplay.textContent = data.main.temp;
            weatherDescDisplay.textContent = "ciel: "+data.weather[0].description;
        }
        else{
            console.log("Erreur :",requete.status);
            weatherDescDisplay.textContent="??";
        }
    }

}
getExternelWeather();







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

/*@@@@@@@@@@@@@    Photo graphique   @@@@@@@@@@@@@@@*/
const graphes = [
    {
        name:"semaine1",
        image:"image/graphe1.png"
    },
    {
        name:"semaine2",
        image:"image/graphe2.png"
    },
    {
        name:"semaine3",
        image:"image/graphe3.png"
    },
    {
        name:"semaine4",
        image:"image/graphe4.png"
    }

];
let btnWeek = document.querySelector("#semaine button");
let photo = document.querySelector("#graphe img");
let ul = document.querySelector("#semaine ul");
ul.style.display="none";
btnWeek.addEventListener("click",ChangeImage);
function ChangeImage(event){
    ul.innerHTML="";
    for(let i = 0; i < graphes.length ; i++){
        let li = document.createElement("li");
        li.textContent=graphes[i].name;
        li.dataset.num = i;
        li.style.listStyle="none";
        li.addEventListener("click",AjoutImage);
        ul.appendChild(li);
    }
    ul.style.display="block";
    
};
function AjoutImage(event){
    let numImage = event.currentTarget.dataset.num;
    photo.setAttribute("src",graphes[numImage].image);
    ul.style.display="none";
    btnWeek.textContent=graphes[numImage].name;
    
}




