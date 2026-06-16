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

let lat = 49.1829;   // Caen
let lon = -0.3707;

let dateAujo = new Date().toLocaleDateString();
date.textContent= dateAujo;

const apiKey = "2a9c5a7f19fdf0b8318cbfdc1cecaa41";

/*@@@@@@@@@@@@@    Info sur la ville  @@@@@@@@@@@@@@@*/
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
                //console.log(requet.response)
                let data = requet.response;
                lat = Number(data.coord.lat);
                lon = Number(data.coord.lon);
                console.log(lat, lon);
                map.setView([lat, lon], 12);
                marker.setLatLng([lat, lon]);
                marker.bindPopup(value).openPopup();
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

                            /*@@@@@@@@@@@@@    News API   @@@@@@@@@@@@@@@*/

        let newsUrl = `https://gnews.io/api/v4/search?q=${value}&lang=fr&token=${newsApiKey}`;
        let newsRequete = new XMLHttpRequest();
        newsRequete.open("GET",newsUrl,true);
        newsRequete.addEventListener("load",()=>{
            //console.log("status de réponse : ",newsRequete.status);
            //console.log("news réponse :", newsRequete.response);
            if(newsRequete.status === 200){
                console.log("status de réponse : ",newsRequete.status);
                console.log("news réponse :", newsRequete.response);
            }
            else{
                console.log(`Erreur : ${newsRequete.status}`);
            }
        });
        newsRequete.responseType ="json";
        console.log("mon url : ",newsUrl);
        newsRequete.send();
        


    }
}

/*@@@@@@@@@@@@@    Map  @@@@@@@@@@@@@@@*/

let map = L.map("map").setView([lat,lon], 12);
L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19
    }
).addTo(map);
let marker = L.marker([lat, lon])
    .addTo(map)
    .bindPopup("Caen");

    /*@@@@@@@@@@@@@    Actualité   @@@@@@@@@@@@@@@*/

const newsApiKey = "08c763381c0cd324500c7b710d1f73a4";       // apikey de Gnewsapi 
const tecketMasterApiKey = "";


