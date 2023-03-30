const express = require("express");
const router = express.Router();
const { generateImage } = require("../controllers/openaiController");

// http://localhost:5001/openai/generateImage
router.post("/generateImage", generateImage);

module.exports = router;
