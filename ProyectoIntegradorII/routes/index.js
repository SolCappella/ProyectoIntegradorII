var express = require('express');
var router = express.Router();

/* GET home page. */

const mainController = require('../controllers/mainController')
router.get("/", mainController);

const registerControllerController=require('../controllers//registerController')
router.get('/register', registerController);

const loginController=require('../controllers//loginController')
router.get('/login', loginController);

module.exports = router;
