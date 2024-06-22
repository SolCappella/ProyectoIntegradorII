const express= require('express');
const router=express.Router();
const profileController=require('../controllers/profileController')

router.get('/:id', profileController.profile);
router.get('/:id/edit', profileController.edit);

module.exports = router