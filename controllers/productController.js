const db = require('../database/models');
const { validationResult } = require('express-validator');
const productos = db.Product;
const comentarios = db.Comment;
const usuarios = db.User;

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
                res.render('product', { product , errors: {}  });
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
        if (!req.session.user) {
            console.log('Error: El usuario no está logueado.');
            return res.render('error', { message: 'Debes estar logueado para agregar un producto.' });
        }

        const userId = req.session.user.id; ;


        if (!userId) {
            console.log('Error: El usuario no está logueado.');
            return res.render('error', { error: 'Debes estar logueado para agregar un producto.' });
        }
        
        usuarios.findOne({ where: { id: userId } })
            .then(user => { 
                const errors = validationResult(req);
                console.log('Usuario encontrado:', user);

                if (!errors.isEmpty()) {
                    return res.render('product-add', {
                        oldData: req.body,
                        errors: errors.mapped()
                    });
                }
        
                productos.create({
                    usuario_id: user.id,
                    imagen_archivo: req.body.imagen_archivo,
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    created_at: new Date(),
                    updated_at: new Date(),
                    deleted_at: null  
                })
                .then(product => {
                    res.redirect('/products/' + product.id);
                })
                .catch(err => {
                    console.log(err);
                    res.render('error', { message: 'Error al crear el producto' });
                });
            })
            .catch(err => {
                console.log(err);
                res.render('error', { message: 'Error al verificar el usuario' });
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

            return comentarios.destroy({ where: { product_id: productId } }) 
                .then(() => {
                    return productos.destroy({ where: { id: productId } });
                });

            
        }).then(() => {
            return res.redirect('/');
        }).catch(err => {
            console.log(err);
            return res.render('error', { message: 'Error al eliminar el producto' });
        });
    },

    'addComment': function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return productos.findByPk(req.body.id, {
                include: [
                    { association: "comments", include: ["user"] },
                    { association: "user" }
                ]
            })
            .then(product => {
                if (product) {
                    return res.render('product', { product, errors: errors.mapped() });
                } else {
                    return res.render('error', { message: 'Producto no encontrado' });
                }
            }).catch(err => {
                console.log(err);
                return res.render('error', { message: 'Error al buscar el producto' });
            });
        }

        comentarios.create({
            product_id: req.body.product_id,
            usuario_id: req.session.user.id,
            texto: req.body.texto,
            created_at: new Date(),
            updated_at: new Date()
        }).then(() => {
            res.redirect('/products/' + req.body.product_id);

        }).catch(err => {
            console.log(err);
            res.render('error', { message: 'Error al agregar el comentario', error: err });
        });
    },
    'edit': function(req, res) {
        // Hacer un findByPk para encontrar el producto, si pertenece al usuario dejarlo editar y renderizar la vista
        res.render('product-edit')
    },
    'update': function(req, res) {
        // Controller para el form POST para editar el producto. Hacer un productos.update con la info nueva que viene del form
    }
};


module.exports = productController;