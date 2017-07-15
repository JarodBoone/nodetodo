/*
* Entry Point for nodetodo API
*/
//access packages
var express = require('express');
var path = require('path');
var routes = require('./routes');
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController')
var hbs = require('express-handlebars'); //view engine

//instantiate express app
var app = express();

//if port is an enviornment variable, take it. Else 3000
var port = process.env.port || 3000;

//connect to the database
var promise = mongoose.connect(config.getDbConnectionString(),{
    useMongoClient: true
});
setupController(app);

//prepare view engine properties 
hbs_properties = {
    extname: 'hbs'
};

//initialize view engine and point to views folder
app.engine('hbs',hbs(hbs_properties));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs'); 

//direct static content requests to public
app.use('/assets',express.static(path.join(__dirname,'public')));

//direct requests to router
app.use('/',routes);

//start server
app.listen(port); 