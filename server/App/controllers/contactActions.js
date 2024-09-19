const tables = require("../../database/tables");
const { sendContactEmail } = require("../services/emailService")

const browse = async (req, res, next) => {
    try {
      const contact = await tables.contact.readAll();
      delete contact.password;
  
      res.json(contact);
    } catch (err) {
      next(err);
    }
  };
  
  const read = async (req, res, next) => {
    try {
      const contact = await tables.contact.read(req.auth);
      if (contact == null) {
        res.sendStatus(404);
      } else {
        delete contact.id;
        delete contact.password;
        if (contact.siret === "") delete contact.siret;
        
        res.json(contact);
      }
    } catch (err) {
      next(err);
    }
  };
  
  const add = async (req, res, next) => {
    const contact = req.body;
    try {
      console.log('Données de contact reçues:', contact);
      const insertId = await tables.contact.create(contact);
      console.log('Contact inséré avec l\'ID:', insertId);
      const emailSent = await sendContactEmail(contact);
      console.log('Résultat de l\'envoi d\'e-mail:', emailSent);
  
      if (emailSent) {
        res.status(201).json({ insertId, emailSent: true });
      } else {
        res.status(201).json({ insertId, emailSent: false });
      }
    } catch (err) {
      console.error('Erreur lors de l\'ajout du contact:', err);
      next(err);
    }
  };
  
  const destroy = async (req, res, next) => {
    try {
      await tables.contact.delete(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {
    browse,
    read,
    add,
    destroy,
  };