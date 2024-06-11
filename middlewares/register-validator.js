const { body } = require('express-validator');
const db = require('../database/models');

const registerValidation = [
    body('email')
        .notEmpty().withMessage('Debes completar tu email').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido')
        .custom(function(value) {
            return db.User.findOne({
                where: { email: value }
            }).then(function(user) {
                if (user) {
                    throw new Error('Este email ya está registrado');
                }
            });
        }),

    body('name')
        .notEmpty().withMessage('Debes completar tu nombre de usuario').bail(),

    body('password')
        .notEmpty().withMessage('Debes introducir una contraseña').bail()
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres'),

    body('password_confirm')
        .notEmpty().withMessage('Debes confirmar tu contraseña').bail()
        .custom(function(value, { req }) {
            if (value !== req.body.password) {
                throw new Error('Las contraseñas no coinciden');
            }
        })
];

module.exports = registerValidation;