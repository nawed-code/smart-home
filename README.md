# SmartHome Dashboard

SmartHome est une application web de supervision intelligente permettant de centraliser différentes 
fonctionnalités d'une maison connectée dans une interface moderne et responsive.

Le projet combine un frontend interactif avec plusieurs services backend afin de gérer des données en temps réel,
la visualisation d'informations et l'intégration d'un assistant conversationnel basé sur une IA locale.

## Fonctionnalités principales

- 🌍 Recherche de villes et affichage des informations météorologiques
- 🗺️ Intégration d'une carte interactive avec Leaflet
- 📰 Affichage d'actualités et événements liés à une ville
- 🤖 Assistant conversationnel basé sur Ollama (LLM local)
- ⚡ Réponses IA en streaming comme les assistants modernes
- 🌙 Gestion du thème clair/sombre avec sauvegarde utilisateur
- 📱 Interface responsive adaptée aux différents écrans

## Technologies utilisées

### Frontend
- HTML5
- CSS3 (Grid, Flexbox, Responsive Design)
- JavaScript ES6
- DOM API
- Fetch API
- LocalStorage

### Backend
- Node.js
- Express.js
- API REST
- Gestion des requêtes HTTP
- Middleware CORS

### Intelligence artificielle
- Ollama
- Modèle Llama 3.2
- Communication avec un Large Language Model local
- Streaming des réponses IA

### APIs externes
- API météo
- API actualités
- Leaflet Maps

## Architecture

Le projet suit une architecture client-serveur :

Utilisateur
↓
Frontend JavaScript
↓
Serveur Express.js
↓
APIs externes / Ollama

## Objectifs

Ce projet a pour objectif d'explorer le développement d'applications web modernes, 
l'intégration d'API, la communication temps réel et l'utilisation de modèles d'intelligence artificielle locaux.
