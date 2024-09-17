const express = require("express");
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
}
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Bienvenue sur l'API de votre projet fullstack!" });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});