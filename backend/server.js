const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());   // pour gérer CORS policy

server.get("/",(req,res)=>{
    res.send("message depuis serveur de smartHome");
});

server.get("/news",async (req,res)=>{
    const newsApiKey = "08c763381c0cd324500c7b710d1f73a4"; 
    let value = req.query.city;
    const gnewsUrl = `https://gnews.io/api/v4/search?q=${value}&lang=fr&token=${newsApiKey}`;
    try{
        let reponse = await fetch(gnewsUrl);
        let data = await reponse.json();
        console.log("réponse reçu depuis gnews");
        res.json(data);
    }
    catch(error){
        console.log(`Error : ${error}`);
        res.status(404).json({
            message :"Resource introuvable"
        })
    }
})

server.listen(3000,()=>{
    console.log("Serveur vient de demarrer");
});