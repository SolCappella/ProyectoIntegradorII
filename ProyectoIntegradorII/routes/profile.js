const express= require('express');
const router=express.Router();


const profileController=require('../controllers/profileController')
router.get('/profile', profileController.index);

const profileEditController=require('../controllers/profileController')
router.get('/profile/edit', profileController.edit);

module.exports=router