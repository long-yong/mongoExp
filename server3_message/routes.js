// routes.js

var express = require("express");
var session = require('express-session');
const bp = require('body-parser');
const controller = require('./controller');
const flash = require('express-flash');

module.exports = function(app) {
    app.set('views', __dirname + '/views');
    app.set('view engine', "ejs");
    app.use(express.static(__dirname + "/static"));
    app.use(bp.urlencoded({extended:true}));
    app.use(session({secret:'keyboardkitteeyong12345', resave:false, 
            saveUninitialized:true, cookie:{maxAge:60000}}));
    app.use(flash());

    // routes
    
    app.get ('/',                controller.add);

    app.get ('/add',             controller.add);

    app.post('/addmessage',      controller.addMessage);

    app.post('/addcomment/:mid', controller.addComment);

    app.get('/clear',            controller.clear);

    return app;
}