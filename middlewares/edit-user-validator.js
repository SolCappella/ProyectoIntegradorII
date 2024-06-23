const { body } = require('express-validator');
const db = require('../database/models');

const editUserValidator = [
    body('email')
        .notEmpty().withMessage('Debes completar tu email').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido')
        .custom((value, { req }) => {
            return db.User.findOne({
                where: { email: value }
            }).then(user => {
                if (user && user.id != req.session.user.id) {
                    throw new Error('Este email ya está registrado');
                }
            });
        }),
    body('usuario')
        .notEmpty().withMessage('Debes completar tu nombre de usuario').bail(),

    body('contraseña')
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres'),

    body('fechaNacimiento')
        .isDate().withMessage('Debe ser una fecha válida'),

    body('documento')
        .isInt().withMessage('Debe ser un número entero válido')
];

module.exports = editUserValidator;
