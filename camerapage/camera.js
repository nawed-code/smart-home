"use strict"
const pieces = [

    {
        image : "../image/smart-house.png",
        title : "Salon",
        position : "Rez-de-chaussée",
        superficie : "35m²",
        portes : 2
    },
    {
        image : "../image/smart-house.png",
        title : "Cuisine",
        position : "Rez-de-chaussée",
        superficie : "18m²",
        portes : 1
    },
    {
        image : "../image/smart-house.png",
        title : "Chambre Parentale",
        position : "1er étage",
        superficie : "25m²",
        portes : 1
    },
    {
        image : "../image/smart-house.png",
        title : "Salon 2",
        position : "1er étage",
        superficie : "20m²",
        portes : 2
    },
    {
        image : "../image/smart-house.png",
        title : "Garage",
        position : "Sous-sol",
        superficie : "28m²",
        portes : 1
    },
    {
        image : "../image/smart-house.png",
        title : "Jardin",
        position : "Extérieur",
        superficie : "68m²",
        portes : 3
    },
    {
        image : "../image/smart-house.png",
        title : "Entrée",
        position : "Extérieur",
        superficie : "4m²",
        portes : 1
    }

];
const noms = ["Salon","Cuisine","Jardin","Entrée","Garage","Salon 2" ,"Chambre Parentale"];

let btnSearche = document.querySelector("#searche button");
btnSearche.addEventListener("click",affichePhoto);

function affichePhoto(event){
    let valeur = document.querySelector("#searche input").value.trim();
    let error = document.getElementById("error");
    if(valeur === "" || !noms.some(nom => nom.toLowerCase().includes(valeur.toLowerCase()))){
        error.textContent="";
        let p = document.createElement("p");
        p.textContent="Veuillez écrire un nom valide";
        error.style.color="red";
        error.appendChild(p);
        return 
    }
    else{
        error.textContent="";

    }
}