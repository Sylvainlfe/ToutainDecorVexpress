const express = require("express");
const multer = require("multer");

const router = express.Router();

const {storage} = require("../../services/multer");
const projectAction = require("../../controllers/projectAction");

const upload = multer({storage});

router.post("/", upload.fields([
    {name: "img_min_url", maxCount: 1},
{name:"img_url", maxCount:100}]), projectAction.add);

module.exports = router;