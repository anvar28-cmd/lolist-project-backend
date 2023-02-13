const express = require("express");
const router = express.Router();
const fs = require("fs");

const buildController = require('../controllers/buildController')

router
.route("/")
.get(buildController.index)
.post(buildController.addBuild);

router
.route("/:id")
.delete(buildController.deleteBuild)
// .get(buildController.singleBuild)



module.exports = router;