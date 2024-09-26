const express = require("express");
const router = express.Router();

const { upload, formatThumbnail, formatPhotos, deleteProjectFiles } = require("../../services/multer");
const projectAction = require("../../controllers/projectAction");

router.post(
  "/",
  upload.fields([
    { name: "thumbnail_url", maxCount: 1 },
    { name: "photos_url", maxCount: 20 },
  ]),
  formatThumbnail,
  formatPhotos,
  projectAction.add
);

router.get("/", projectAction.getAll);

router.get("/:id", projectAction.getById);

router.delete("/:id", projectAction.remove, deleteProjectFiles, (req, res) => {
  res.json({ ok: true, message: 'Projet et fichiers associés supprimés avec succès' });
});

module.exports = router;