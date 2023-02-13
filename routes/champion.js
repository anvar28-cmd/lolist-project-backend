const express = require("express");
const router = express.Router();
const fs = require("fs");

const championController = require('../controllers/championController')

router
.route("/")
.get(championController.index)
.post(championController.addChampion);


module.exports = router;