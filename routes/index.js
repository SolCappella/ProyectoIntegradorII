var express = require('express');
var router = express.Router();
const registerValidation = require('../middlewares/register-validator');

/* GET home page. */

const mainController = require('../controllers/mainController')
router.get("/", mainController.index);
router.get('/register', mainController.register);
router.post('/register', registerValidation, mainController.register);
router.get('/login', mainController.login);
router.get('/results', mainController.results);
router.post('/logout',mainController.logout);

module.exports = router;
