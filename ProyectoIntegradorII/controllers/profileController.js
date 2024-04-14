const db=require('../db/data');


const profileController={
    'profile':function (req,res) {
        res.render('profile');
    },
}

module.exports= profileController;