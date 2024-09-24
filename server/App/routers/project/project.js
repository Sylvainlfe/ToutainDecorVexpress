const express = require("express");
const multer = require("multer");
const router = express.Router();

const { storage } = require("../../services/multer");
const projectAction = require("../../controllers/projectAction");

const upload = multer({ storage });

router.post(
  "/",
  upload.fields([
    { name: "thumbnail_url", maxCount: 1 },
    { name: "photos_url", maxCount: 20 },
  ]),
  projectAction.add
);

module.exports = router;
