const db = require('../db/data');

const profileController = {
    'profile':function (req,res) {
        let user = db.usuario; 

        let stats = {
            products: 8,
            followers: 200,
            comments: 300,
        };

        let userProducts = db.productos;

        res.render('profile', {user, stats, userProducts});
    },
    'edit': function (req, res) {
        let user = db.usuario
        
        res.render('profile-edit', {user});
    },
};

module.exports = profileController;