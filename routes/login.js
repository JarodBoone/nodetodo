//NOT USED AT THE MOMENT


var express = require('express');
var mainHandles = require('../handles/main.js'); 
var router = express.Router(); 

router.get('/login',function(req,res,next){
    res.render('login',mainHandles)
});

module.exports = router;