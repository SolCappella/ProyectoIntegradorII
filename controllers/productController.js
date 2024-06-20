// controllers/productController.js
const db = require('../database/models');
const { validationResult } = require('express-validator');

const productController = {
    'product': function (req, res) {
        let producto = db.Product;

        res.render('product', { producto });
    },
    'add': function (req, res) {
        res.render('product-add');
    },
    'create': function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('product-add', {
                errors: errors.mapped(),
                oldData: req.body
            });
        }

        const newProduct = {
            usuario_id: req.session.user.id,
            imagen_archivo: req.body.imagen_archivo,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            created_at: new Date(),
            updated_at: new Date()
        };

        db.Product.create(newProduct)
            .then(product => {
                res.redirect('/');
            })
            .catch(err => {
                console.log(err);
                res.render('error', { error: err });
            });
    }
}

module.exports = productController;