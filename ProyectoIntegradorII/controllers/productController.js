const db = require('../db/data');

const productController={
    'product':function (req,res) {
        res.render('product');
    },
    'add': function (req, res) {
        res.render('product-add');
    },
}

module.exports=productController;

