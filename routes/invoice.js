const express = require("express");
const { generate } = require("../controllers/invoice");
const router = express.Router();


router.post("/", generate);

module.exports = router;