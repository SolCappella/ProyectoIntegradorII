const express= require('express');
const router=express.Router();


const profileController=require('../controllers//profileController')
router.get('/profile', profileController);

const profileEditController=require('../controllers//profile-editController')
router.get('/profile/edit', profileEditControllerController);

module.exports=router