const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
server.use(cors());   // pour gérer CORS policy
server.use(express.json());
server.use(express.static("smartHome"));
server.get("/",(req,res)=>{
    res.send("message depuis serveur de smartHome");
});
server.get("/news",async (req,res)=>{
    const newsApiKey = process.env.GNEWS_API_KEY;
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
});
const historique = [];
historique.push({
        role: "system",
        content: "Tu es Nawed, l'assistant du projet SmartHome. Réponds toujours en français et aide l'utilisateur à gérer sa maison connectée. Donne des réponses courtes"
    });
server.post("/chatbot" , async (req,res)=>{
    const question = req.body.question;
    historique.push({
        role : "user",
        content : question
    });
    try{
        
        let reponse = await fetch("http://localhost:11434/api/chat",{
            method:"POST",
            headers: {
                "Content-type" : "application/json"
            },
            body:JSON.stringify({
                model : "llama3.2",
                messages:historique,
                stream : false
            })
        });
        let data = await reponse.json();
        //console.log("réponse reçu de server : ", data);
        historique.push(data.message);
        //console.log("contenu d'historique : ",historique);
        

        res.status(200).json({
            answer : data.message.content
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            erreur : "Ollama ne répond pas"
        });
    }
    
});

server.listen(3000,()=>{
    console.log("Serveur vient de demarrer");
    //console.log(process.env.GNEWS_API_KEY);
});