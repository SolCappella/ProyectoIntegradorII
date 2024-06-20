const express= require('express');
const router=express.Router();
const productController=require('../controllers/productController');
const{productValidation} =require('../middlewares/product-validator');

router.get('/', productController.product);
router.get('/add', productController.add);
router.post ('/add', productValidation , productController.create)

module.exports = router;