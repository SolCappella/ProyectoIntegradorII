const db = require('../database/models');
const { validationResult } = require('express-validator');
const Op= db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const productos = db.Product;
const usuario = db.User;
const commentario= db.Comment;

const mainController = {
    'index': function (req, res) {
        productos.findAll({
            include: [
                { association: "comment" },
                { association: "user" }
            ],
            order:[['created_at','DESC']],
        })
        .then(resultados => {
            res.render('index', { productos: resultados });
        })
        .catch(err => {
            console.log(err);
            res.render('error', { error: err });
        });
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
        if (req.method === 'POST') {
            const errors = validationResult(req);
    
            if (!errors.isEmpty()) {
                const errorMessages = errors.mapped();
                return res.render('register', {
                    title: 'Registrate',
                    oldData: req.body,
                    errors: errorMessages
                });
            }
    
            const user = {
                usuario: req.body.username,
                email: req.body.email,
                username: req.body.username,
                contraseña: bcrypt.hashSync(req.body.password, 10),
                fecha: req.body.birthdate,
                dni: req.body.dni,
                foto: req.body.profilePic,
                created_at: new Date(),
                updated_at: new Date()
            };
    
            db.User.create(user)
                .then(user => {
                    // Redirige a la página principal con los productos
                    return res.redirect("/");
                })
                .catch(err => {
                    console.error("Error al grabar el usuario", err);
                    return res.render('register', {
                        title: 'Registrate',
                        oldData: req.body,
                        errors: { dbError: 'Error al guardar el usuario' }
                    });
                });
        } else {
            return res.render('register', { 
                title: "Registrate",
                oldData: {},
                errors: {}
            });
        }
    },

    'logout': function(req,res){
        req.session.destroy();

        res.clearCookie('cookieUser');
        
        return res.redirect('/')
    },
    'results': function (req, res) {

        let Query=req.query.search;

        if (!Query) {
            console.log('La query está vacía');
            return res.render('search-results', { productos: [], Query: '' });
        }

        console.log('Buscando por:', Query);

        productos.findAll({
            where:{
                [Op.or]:[
                    { nombre:{[Op.like]: `%${Query}%`}},
                    { descripcion:{[Op.like]: `%${Query}%`}}
                ]},

            order: [['created_at','DESC']],
            include:[{model:usuario, as:'user'}]

        })
        .then(productos =>{
            res.render('search-results',{productos:productos,Query:Query});
        })
        .catch(err=>{
            console.log(err);
        })
    },
}

module.exports = mainController;
