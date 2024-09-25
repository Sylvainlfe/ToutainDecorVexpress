const tables = require("../../database/tables");

const add = async (req, res, next) => {
    try {
      console.log('Fichiers reçus:', req.files);
      console.log('Corps de la requête:', req.body);
      console.log('Headers de la requête:', req.headers);
      const project = req.body;
      const insertId = await tables.project.create(project);
      res.status(201).json({ ok: true, data: { insertId, ...project } });
    } catch (err) {
      console.error('Erreur lors de l\'ajout du projet:', err);
      res.status(400).json({ ok: false, error: err.message });
    }
  };

module.exports = { add };
