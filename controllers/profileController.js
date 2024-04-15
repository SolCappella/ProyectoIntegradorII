const db = require('../db/data');

const profileController={
    'profile':function (req,res) {
        let user = db.usuario; 

        let stats = {
            productos: 8,
            seguidores: 200,
            comentarios: 300,
        }

        res.render('profile', {user, stats});
    },
    'edit': function (req, res) {
        res.render('profile-edit');
    },
}

module.exports = profileController;