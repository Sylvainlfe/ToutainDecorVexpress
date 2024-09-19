const express = require("express");

const router = express.Router();

const contact = require("../../controllers/contactActions");

// const validateUser = require("../../../services/middlewares/validateUser");

router.post("/", contact.add);

router.get("/:id", contact.read);

router.get("/", contact.read)

router.delete("/:id", contact.destroy);

module.exports = router;