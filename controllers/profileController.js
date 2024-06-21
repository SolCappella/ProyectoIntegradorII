const db = require('../database/models');
const productos = db.Product;
const usuario = db.User;

const profileController = {
    'profile': function (req ,res) {
        const userId = req.session.user.id;
        
        usuario.findByPk(userId)
            .then(user => {
                if (!user) {
                    return res.redirect('/login');
                }

                productos.findAll({
                    where: { usuario_id: userId},
                    order: [['created_at', 'DESC']]
                })
                .then(userProducts => {
                    res.render('profile', {
                        user: user,
                        userProducts: userProducts
                    });
                })
                .catch(err => {
                    console.log(err);
                }) 
            })
            .catch(err => {
                console.log(err);
            }) 
    } ,
    'edit': function (req ,res) {
        res.render("profile-edit")
    },
};

module.exports = profileController;