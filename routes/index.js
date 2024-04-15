var express = require('express');
var router = express.Router();

/* GET home page. */

const mainController = require('../controllers/mainController')
router.get("/", mainController.index);
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.get('/results', mainController.results);

module.exports = router;
