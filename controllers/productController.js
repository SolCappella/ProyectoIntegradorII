const db = require('../database/models');
const { validationResult } = require('express-validator');
const productos = db.Product;

const productController = {
    'product': function (req, res) {
       productos.findByPk(req.params.id, {
            include: [
                { association: "comment" , include: ["user"]},
                { association: "user" }
            ]
        })

        .then(product => {
            if (product) {
                res.render('product', { product });
            } else {
                res.render('error', { error: 'Producto no encontrado' });
            }
        }).catch(err => {
            console.log(err);
            res.render('error', { error: 'Error al buscar el producto' });
        });
    },

    'add': function (req, res) {
        res.render('product-add', {
            oldData: req.body || {},
            errors: {}
        });
    },

    'create': function (req, res) {
        
        const errors = {}; 

        if (Object.keys(errors).length > 0) {
            return res.render('product-add', {
                oldData: req.body,
                errors: errors
            });
        }

        // Si no hay errores, procede a crear el producto.
        productos.create({
            usuario_id: req.session.user.id,
            imagen_archivo: req.body.imagen_archivo,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            created_at: new Date(),
            updated_at: new Date()
        }).then(product => {
            res.redirect('/products/' + product.id);
        }).catch(err => {
            console.log(err);
            res.render('error', { error: 'Error al crear el producto' });
        
        });
    },

    'delete': function (req, res) {
        let productId = req.body.id;
        let userId = req.session.user ? req.session.user.id : undefined;

        if (!userId) {
            return res.render('error', { message: 'Debes estar logueado para realizar esta acción' });
        }

        productos.findByPk(productId).then(product => {
            if (!product) {
                return res.render('error', { message: 'Producto no encontrado' });
            }

            if (product.usuario_id !== userId) {
                return res.render('error', { message: 'No tienes permiso para eliminar este producto' });
            }

            return productos.destroy({ where: { id: productId } });
        }).then(() => {
            return res.redirect('/');
        }).catch(err => {
            console.log(err);
            return res.render('error', { message: 'Error al eliminar el producto' });
        });
    }
};


module.exports = productController;