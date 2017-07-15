//Primary router
var express = require('express');
var login = require('./login');
var mainHandles = require('../handles/main.js');
var router = express.Router(); 

router.get('/login',function(req,res,next){
    res.render('login'); 
}); 

router.get('/',function(req,res,next){
    res.render('main',mainHandles);
});

module.exports = router;