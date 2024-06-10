const { body } = require("express-validator");
const db = require("../database/models");
const bcrypt = require('bcryptjs');
const { where } = require("sequelize");

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo válido")
        .custom(function(value, {req}) {
            return db.User.findOne({
                where: {email: value}
            })
            .then(function(userToLogin){
                if(!userToLogin){
                    throw new Error("No existe un usuario con ese email")
                }
            })
        }),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir una contraseña")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: { email: req.body.email}
            })
            .then(function(user){
                if(user){
                    const password = user.password;
                    const passwordOk = bcryptjs.compareSync(value, password);
                    if(!passwordOk){
                        throw new Error("Contraseña incorrecta")
                    }
                }
            })
        })
]

module.exports = loginValidation;