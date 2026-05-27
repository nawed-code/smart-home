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
let detail = document.getElementById("details");
let img = document.querySelector("#monitor img");
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
        while(detail.children.length > 1){
                detail.removeChild(detail.lastElementChild);
            };
        for(let i = 0; i < pieces.length ; i++){
            if(pieces[i].title.toLowerCase() === valeur.toLowerCase()){
                let h3 = document.createElement("h3");
                h3.textContent= pieces[i].title;
                detail.appendChild(h3);
                let p = document.createElement("p");
                p.textContent= `Position : ${pieces[i].position} avec une superficie : ${pieces[i].superficie} et le nombre de portes : ${pieces[i].portes}`;
                detail.appendChild(p);
            }
        }
    }
    
}