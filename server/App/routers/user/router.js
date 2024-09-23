const express = require("express");

const router = express.Router();

const user = require("../../controllers/userActions");
const { validateUser } = require("../../services/validateUser");
const { hashPassword } = require("../../services/hashPassword");

router.post("/", validateUser, hashPassword, user.add);

module.exports = router;