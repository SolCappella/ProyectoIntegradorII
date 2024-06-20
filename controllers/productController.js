const db = require('../database/models');
const { validationResult } = require('express-validator');

const productController = {
    'product': function (req, res) {
        let producto = db.Product.findByPk(req.params.id, {
            include: [
                { association: "comment" },
                { association: "user" }
            ]
        });

        producto.then(product => {
            if (product) {
                res.render('product', { product });
            } else {
                res.status(404).render('error', { error: 'Producto no encontrado' });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).render('error', { error: 'Error al buscar el producto' });
        });
    },

    'add': function (req, res) {
        res.render('product-add', {
            oldData: req.body || {},
            errors: {}
        });
    },

    'create': function (req, res) {
        // Aquí puedes agregar la lógica para crear el producto,
        // incluyendo validaciones y manejo de errores.
        const errors = {}; // Aquí debes agregar la lógica para manejar los errores de validación.

        if (Object.keys(errors).length > 0) {
            return res.render('product-add', {
                oldData: req.body,
                errors: errors
            });
        }

        // Si no hay errores, procede a crear el producto.
        db.Product.create({
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
            res.status(500).render('error', { error: 'Error al crear el producto' });
        
        });
    }}

module.exports = productController;