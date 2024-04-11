const express= require('express');
const router=express.Router();
const registerControllerController=require('../controllers//registerController')


router.get('/', registerController);



module.exports=router