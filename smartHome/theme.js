"use strict"
console.log("salut dupuis theme js");
let body = document.body;

if(localStorage.getItem("theme") === "mode sombre"){
    console.log("localstorage depuis theme js :",localStorage.getItem("theme"));
    body.classList.add("dark-theme");
}
else{
    console.log("localstorage depuis theme js :", localStorage.getItem("theme"));
}



