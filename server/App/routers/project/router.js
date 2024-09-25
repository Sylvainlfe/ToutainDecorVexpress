const express = require("express");
const router = express.Router();

const { upload, formatThumbnail, formatPhotos } = require("../../services/multer");
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

module.exports = router;