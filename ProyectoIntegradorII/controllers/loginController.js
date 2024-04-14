const db=require('../db/data');


const loginContoller={
    'login': function mostrarFormLogin (req, res) {
    res.render ('login')
}
}
module.exports=loginContoller;