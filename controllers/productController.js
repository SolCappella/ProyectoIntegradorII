const db = require('../db/data');

const productController = {
    'product': function (req, res) {
        let producto = db.productos;

        res.render('product', { producto });
    },
    'add': function (req, res) {
        let user = db.usuario;

        res.render('product-add', { user });
    },
}

module.exports = productController;

