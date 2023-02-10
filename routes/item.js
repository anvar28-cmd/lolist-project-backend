const express = require('express');
const router = express.Router();
const fs = require("fs");

const itemController = require('../controllers/itemController')

router
.route('/')
.get(itemController.index);

router
.route('/:id')
.get(heroesController.singleItem)

module.exports = router