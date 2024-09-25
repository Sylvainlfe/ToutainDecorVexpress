const express = require("express");
const router = express.Router();
const loginActions = require("../../controllers/loginActions");

router.post("/", loginActions.login);

module.exports = router;