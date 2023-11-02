const express = require("express");
const BookController = require("../controllers/BookController");
const router = express.Router();

router.post("/",BookController.insert)

module.exports = router;
