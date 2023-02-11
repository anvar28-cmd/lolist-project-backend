const express = require("express");
const router = express.Router();
const fs = require("fs");

const spellController = require('../controllers/spellController')

router.route("/").get(spellController.index);

router
  .route("/:id")
  .get(spellController.singleSpell)

module.exports = router;
