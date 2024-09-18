require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.APP_PORT;

const corsOptions = {
  origin: [process.env.CLIENT_URL]
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Bienvenue sur l'API de votre projet fullstack!" });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});