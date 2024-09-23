const express = require("express");

const router = express.Router();

const user = require("../../controllers/userActions");

router.post("/", user.add);

module.exports = router;