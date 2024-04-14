const db=require('../db/data');



const mainController={
    'index': function (req,res) {
        res.render('index');
}
}
module.exports = mainController;