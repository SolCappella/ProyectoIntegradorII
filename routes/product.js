const express= require('express');
const router=express.Router();
const productController=require('../controllers/productController');
const{productValidation} =require('../middlewares/product-validator');


router.get('/add', productController.add);
router.post ('/add', productValidation , productController.create);
router.get('/:id', productController.product);
router.post('/:id/delete', productController.delete);


module.exports = router;