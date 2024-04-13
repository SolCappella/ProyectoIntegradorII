var express = require('express');
var router = express.Router();

/* GET home page. */

const mainController = require('../controllers/mainController')
router.get("/", mainController.index);

const registerController = require('../controllers//registerController')
router.get('/register', registerController.index);

const loginController = require('../controllers//loginController')
router.get('/login', loginController.index);

module.exports = router;
