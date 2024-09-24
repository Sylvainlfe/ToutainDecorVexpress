const express = require("express");

const router = express.Router();
const loginController = require("../../controllers/loginActions");

router.post("/", loginController.login);

module.exports = router;