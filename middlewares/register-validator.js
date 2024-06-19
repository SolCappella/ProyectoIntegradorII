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

    body('username')
        .notEmpty().withMessage('Debes completar tu nombre de usuario').bail(),

    body('password')
        .notEmpty().withMessage('Debes introducir una contraseña').bail()
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres'),
    
    body('password_confirm')
    .custom((value, { req }) => {
         if (value !== req.body.password) {
              throw new Error('Las contraseñas no coinciden');
            }
            return true;
        }),

    body('birthdate')
        .optional({ checkFalsy: true })
        .isDate().withMessage('Debe ser una fecha válida'),

    body('dni')
        .optional({ checkFalsy: true })
        .isInt().withMessage('Debe ser un número entero válido'),

    body('profilePic')
        .optional({ checkFalsy: true })
        .isString().withMessage('Debe ser una cadena de texto válida')
];

module.exports = registerValidation;