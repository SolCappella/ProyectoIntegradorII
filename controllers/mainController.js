const db = require('../database/data');
const db2 = require('../database/models');
const usuario = db2.User;
const productos = db2.Product;

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
        res.render('login', { title: 'Iniciar sesión' })
    },
    'register': function (req, res) {
        res.render('register', { title: "Registrate" })
    },
    'results': function (req, res) {
        let resultados = db.productos;
        res.render('search-results', { resultados });
    },
}

module.exports = mainController;
