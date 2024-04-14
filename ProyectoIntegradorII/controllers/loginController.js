const db = require('../db/index');
const session = require('express-session');

const loginController={
    index :function (req,res) {
        res.render('login')
    }


}
module.exports = loginController;
