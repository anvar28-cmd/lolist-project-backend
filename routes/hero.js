const express = require("express");
const router = express.Router();
const fs = require("fs");

const heroController = require('../controllers/heroController')

router.route("/").get(heroController.index);

router
  .route("/:id")
  .get(heroController.singleHero)

module.exports = router;
