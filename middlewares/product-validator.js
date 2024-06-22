const { body } = require('express-validator');

const productValidation = [
    body('nombre')
        .notEmpty().withMessage('El nombre del producto es obligatorio.'),
    body('descripcion')
        .notEmpty().withMessage('La descripción del producto es obligatoria.'),
    body('imagen_archivo')
        .notEmpty().withMessage('La imagen del producto es obligatoria.')
];

module.exports = { productValidation };