const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const editUserValidator = require('../middlewares/edit-user-validator');

router.get('/:id', profileController.profile);
router.get('/:id/edit', profileController.edit);
router.post('/:id/edit', editUserValidator, profileController.update);

module.exports = router;
