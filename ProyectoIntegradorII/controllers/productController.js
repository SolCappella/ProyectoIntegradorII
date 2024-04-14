const db = require('../db/data');

const productController={
    'index':function (req,res) {
        res.render('product')
    },
}

module.exports=productController;

