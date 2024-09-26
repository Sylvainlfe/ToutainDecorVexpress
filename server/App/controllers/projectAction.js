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

  const getAll = async (req, res, next) => {
    try {
      const projects = await tables.project.readAll();
      res.json(projects);
    } catch (err) {
      console.error('Erreur lors de la récupération des projets:', err);
      res.status(500).json({ ok: false, error: err.message });
    }
  };
  
  const remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const project = await tables.project.delete(id);
      req.project = project; // Ajoutez le projet à la requête pour le middleware deleteProjectFiles
      next();
    } catch (err) {
      console.error('Erreur lors de la suppression du projet:', err);
      res.status(500).json({ ok: false, error: err.message });
    }
  };

  const getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const project = await tables.project.read(id);
      res.json(project);
    } catch (err) {
      console.error('Erreur lors de la récupération du projet:', err);
      res.status(500).json({ ok: false, error: err.message });  
    }
  };

module.exports = { add, getAll, remove, getById };


