var express = require('express');
var router = express.Router();
const registerValidation = require('../middlewares/register-validator');
const loginValidation = require('../middlewares/login-validator');

const mainController = require('../controllers/mainController')
router.get("/", mainController.index);
router.get('/register', mainController.register);
router.post('/register', registerValidation, mainController.register);
router.get('/login', mainController.login);
router.post('/login', loginValidation, mainController.processLogin)
router.get('/results', mainController.results);
router.post('/logout',mainController.logout);

module.exports = router;
