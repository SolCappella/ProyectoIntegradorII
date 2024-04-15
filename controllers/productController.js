const db = require('../db/data');

const productController={
    'product':function (req,res) {
        let producto = db.productos;
        res.render('product',{producto});
    },
    'add': function (req, res) {
        res.render('product-add');
    },
}

module.exports=productController;

