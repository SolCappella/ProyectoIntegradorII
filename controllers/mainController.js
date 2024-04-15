const db = require('../db/data');

const mainController = {
    'index': function (req, res) {
        let productos = db.productos;
        res.render('index', {productos});
    },
    'login': function mostrarFormLogin(req, res) {
        res.render('login', {title:'Iniciar sesión'})
    },
    'register': function (req, res) {
        res.render('register', { title: "Registrate" })
    },
    'results':function (req,res) {
        res.render('search-results')
    },
}

module.exports = mainController;