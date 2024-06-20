const db = require('../database/models');
const productos = db.Product;


const productController = {
    'product': function (req, res) {
        productos.findAll({
            include: [
                {association: "comment"},
                {association: "user"}
            ]
        })
        .then( resultados => {
            res.render('product', { productos });
        })
        .catch(err => {
            console.log(err);
        })
        
    },
    'add': function (req, res) {
        let user = db.usuario;

        res.render('product-add', { user });
    },
}

module.exports = productController;

