const express= require('express');
const router=express.Router();
const productController=require('../controllers/productController');
const{ productValidation } =require('../middlewares/product-validator');
const { commentValidation } = require('../middlewares/comment-validator');


router.get('/add', productController.add);
router.post('/add', productValidation , productController.create);
router.get('/:id', productController.product);
router.get('/:id/edit', productController.edit);
router.post('/:id/edit', productValidation, productController.update)
router.post('/:id/delete', productController.delete);
router.post('/:id/comment', commentValidation, productController.addComment);

module.exports = router;