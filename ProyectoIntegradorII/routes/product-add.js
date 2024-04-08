const express= require('express');
const router=express.Router();
const productAddController=require('../controllers//product-addController')


router.get('/', productAddController);



module.exports=router