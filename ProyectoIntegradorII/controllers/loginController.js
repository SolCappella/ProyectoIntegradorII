const loginContoller={
    'index':function (req,res) {
        res.render('login')
    }
}

function mostrarFormLogin (req, res) {
    res.render ('login')
}

module.exports=loginContoller;