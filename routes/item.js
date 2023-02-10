const express = require('express');
const router = express.Router();
const fs = require("fs");

const itemController = require('../controllers/itemController')

router
.route('/')
.get(itemController.index);

router
.route('/:id')
.get(itemController.singleItem)

module.exports = router