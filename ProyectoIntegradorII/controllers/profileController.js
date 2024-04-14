const db=require('../db/data');

const profileController={
    'profile':function (req,res) {
        res.render('profile');
    },
    'edit': function (req, res) {
        res.render('profile-edit');
    },
}

module.exports= profileController;