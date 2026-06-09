"use strict"
console.log("bojour depuis position js");

let input = document.querySelector("#search input");
let btn = document.querySelector("#search button");
let erreur = document.getElementById("erreur");
let ville = document.querySelector("#description h3");
let date = document.getElementById("date");
let temp = document.getElementById("temp");
let descTemp = document.getElementById("tempDesc");
let ressenti = document.getElementById("ressenti");
let min = document.getElementById("min");
let speed = document.getElementById("speed");

let lat;
let lon;

let dateAujo = new Date().toLocaleDateString();
date.textContent= dateAujo;

const apiKey = "2a9c5a7f19fdf0b8318cbfdc1cecaa41";

/*@@@@@@@@@@@@@    Map  @@@@@@@@@@@@@@@*/
btn.addEventListener("click",information);
function information(){
    let value = input.value.trim();
    if(!value || value ===""){
        erreur.textContent="";
        erreur.textContent="Entrez une ville valide";
        erreur.style.color="red";
        return 
    }
    else{
        erreur.textContent="";
        ville.textContent=value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric&lang=fr`;
        let requet = new XMLHttpRequest();
        requet.open("GET",url,true);
        requet.addEventListener("load",()=>{
            if(requet.status === 200){
                console.log(requet.response)
                let data = requet.response;
                lat = data.coord.lat;
                lon = data.coord.lon;
                temp.textContent=data.main.temp;
                descTemp.textContent = "Ciel: "+data.weather[0].description;
                ressenti.textContent = data.main.feels_like;
                min.textContent= data.main.temp_min;
                speed.textContent= data.wind.speed;
            }
            else{
                ville.textContent="Erreur "+requet.status;
                return `Erreur : ${requet.status}`;
            }
        });
        requet.responseType ="json";
        requet.send();
    }
}

