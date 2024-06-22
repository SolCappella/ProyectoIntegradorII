const db = require('../database/models');
const productos = db.Product;
const usuario = db.User;

const profileController = {
    'profile': function (req, res) {
        const userId = req.params.id;

        usuario.findByPk(userId, {
            include: [
                {
                    model: productos,
                    as: 'product',
                    order: [['created_at', 'DESC']]
                }
            ]
        })
            .then(userProfile => {
                if (!userProfile) {
                    return res.render('error', { message: 'Usuario no encontrado' });
                }

                res.render('profile', {userProfile: userProfile, userProducts: userProfile.product, loggedUser: req.session.user });
            })
            .catch(err => {
                console.log(err);
                res.render('error', { error: err });
            })
    },
    'edit': function (req, res) {
        res.render("profile-edit")
    },
};

module.exports = profileController;