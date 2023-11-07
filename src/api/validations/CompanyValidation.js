const { body, validationResult } = require('express-validator');

const validateFieldsCompany = [
    body('name').notEmpty().withMessage('El nombre de la empresa es obligatorio'),
    body('name').isString().withMessage('El nombre de la empresa no es válido'),
];

module.exports = {
    validateFieldsCompany,
    validationResult
};
