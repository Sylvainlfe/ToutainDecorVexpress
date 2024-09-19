require('dotenv').config();

const express = require("express");
const cors = require("cors");
const client = require("./database/client")

const app = express();
const port = process.env.APP_PORT;

const corsOptions = {
  origin: [process.env.CLIENT_URL]
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Vérification de la connexion à la base de données
client.checkConnection();

// Initialisation de la base de données
client.initializeDatabase();

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Bienvenue sur l'API de votre projet fullstack!" });
});

app.use('/api', require('./App/routers/router'));

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});