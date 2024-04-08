var express = require('express');
var router = express.Router();

/* GET home page. */

const mainController = require('../controllers/mainController')
router.get("/", mainController);




module.exports = router;
