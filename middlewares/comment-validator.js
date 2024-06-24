const { body } = require('express-validator');

const commentValidation = [
    body('texto')
        .notEmpty().withMessage('El comentario no puede estar vacío').bail()
        .isLength({ min: 3 }).withMessage('El comentario debe tener al menos 3 caracteres')
];

module.exports = { commentValidation };
