const tables = require("../../database/tables");  
const { deleteFiles } = require("../services/multer");
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

  const update = async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log("Received update request for project ID:", id);
      console.log("Request body:", req.body);
      console.log("Request files:", req.files);
  
      const project = req.body;
      const existingProject = await tables.project.read(id);
  
      if (!project.title || project.title.trim() === '') {
        return res.status(400).json({ ok: false, message: 'Le titre du projet ne peut pas être vide' });
      }
  
      // Supprimer les anciennes images si de nouvelles sont fournies
      if (req.files && req.files.thumbnail_url) {
        await deleteFiles([existingProject.thumbnail_url]);
        project.thumbnail_url = req.files.thumbnail_url[0].filename;
      } else {
        project.thumbnail_url = existingProject.thumbnail_url;
      }
  
      if (req.files && req.files.photos_url) {
        await deleteFiles(existingProject.photos_url);
        project.photos_url = req.files.photos_url.map(file => file.filename);
      } else {
        project.photos_url = existingProject.photos_url;
      }
  
      const success = await tables.project.update(id, project);
      if (success) {
        const updatedProject = await tables.project.read(id);
        res.json({ ok: true, message: 'Projet mis à jour avec succès', project: updatedProject });
      } else {
        res.status(404).json({ ok: false, message: 'Projet non trouvé' });
      }
    } catch (err) {
      console.error('Erreur lors de la mise à jour du projet:', err);
      res.status(500).json({ ok: false, error: err.message });
    }
  };
  
  module.exports = { add, getAll, remove, getById, update };


