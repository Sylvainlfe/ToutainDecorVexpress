const express = require("express");

const router = express.Router();

const contactRouter = require("./contact/router");

router.use("/contact", contactRouter);

const registerRouter = require("./user/router");

router.use("/user", registerRouter);

module.exports = router;