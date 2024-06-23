const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const productos = db.Product;
const usuarios = db.User;

const profileController = {
    'profile': function (req, res) {
        const userId = req.params.id;
        usuarios.findByPk(userId, {
            include: [
                {
                    model: productos,
                    as: 'product',
                    order: [['created_at', 'DESC']]
                }
            ]
        })
        .then(userProfile => {
            if (!userProfile) {
                return res.render('error', { message: 'Usuario no encontrado' });
            }
            res.render('profile', { userProfile, userProducts: userProfile.product, loggedUser: req.session.user });
        })
        .catch(err => {
            console.log(err);
            res.render('error', { error: err });
        });
    },
    'edit': function (req, res) {
        const userId = req.session.user.id; 
        usuarios.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.render('error', { message: 'Usuario no encontrado' });
            }
            res.render('profile-edit', { user, errors: {}, oldData: {} });
        })
        .catch(err => {
            console.log(err);
            res.render('error', { error: err });
        });
    },
    'update': function (req, res) {
        const errors = validationResult(req);
        const userId = req.session.user.id; 

        if (!errors.isEmpty()) {
            return usuarios.findByPk(userId)
            .then(user => {
                res.render('profile-edit', {
                    user,
                    errors: errors.mapped(),
                    oldData: req.body
                });
            })
            .catch(err => {
                console.log(err);
                res.render('error', { error: err });
            });
        }

        let updatedData = {
            email: req.body.email,
            usuario: req.body.usuario,
            fecha: req.body.fechaNacimiento,
            dni: req.body.documento,
            updated_at: new Date()
        };

        if (req.body.contraseña) {
            updatedData.contraseña = bcrypt.hashSync(req.body.contraseña, 10);
        }

        if (req.body.foto) {
            updatedData.foto = req.body.foto;
        }

        usuarios.update(updatedData, {
            where: { id: userId }
        })
        .then(() => {
            return usuarios.findByPk(userId);
        })
        .then(user => {
            req.session.user = user;
            res.locals.user = user;
            return res.redirect(`/profile/${userId}`);
        })
        .catch(err => {
            console.error(err);
            res.render('error', { error: err });
        });
    }
};

module.exports = profileController;
