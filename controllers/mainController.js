const db = require('../database/data');
const db2 = require('../database/models');
const usuario = db2.User;
const productos = db2.Product;
const { validationResult } = require('express-validator');

const mainController = {
    'index': function (req, res) {
      
        productos.findAll({
            include: [
                {association: "comment"},
                {association: "user"}
            ]
        })
        .then( resultados => {
            res.render('index', { productos });
        })
        .catch(err => {
            console.log(err);
        })
    },
    'login': function mostrarFormLogin(req, res) {
        const validationErrors = validationResult(req);

        if(!validationErrors.isEmpty()){
            return res.render("login", { title: 'Iniciar sesión'}, {
                errors: validationErrors.mapped(),
                oldData: req.body
            })
        }

        usuario.findOne({
            where: [{email: req.body.email}]
        })
        .then( function(user) {
            req.session.user = user;

            if(req.body.recordarme){
                res.cookie('cookieUser', user.id, { maxAge: 1000 * 60 * 100})
            }
            return res.redirect('/');
        })
        .catch(err =>{
            console.log(err);
        })
    },
    'register': function (req, res) {
        res.render('register', { title: "Registrate" })
    },
    'logout': function(req,res){
        req.session.destroy();

        res.clearCookie('cookieUser');
        
        return res.redirect('/')
    },
    'results': function (req, res) {
        let resultados = db.productos;
        res.render('search-results', { resultados });
    },
}

module.exports = mainController;
