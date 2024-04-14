const db=require('../db/data');


const registerController={
    'register':function (req,res) {
        res.render('register', {title:"Registrate"})
}

}

module.exports= registerController;