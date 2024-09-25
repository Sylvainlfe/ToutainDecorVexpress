const express = require("express");

const router = express.Router();

const contactRouter = require("./contact/router");

router.use("/contact", contactRouter);

const registerRouter = require("./user/router");

router.use("/user", registerRouter);

const loginRouter = require("./login/router");

router.use("/login", loginRouter);

const projectRouter = require("./project/router");

router.use("/project", projectRouter);

module.exports = router;