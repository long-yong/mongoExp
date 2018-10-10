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

    app.get ('/',                        controller.getall);
    app.get ('/:id',                     controller.getone);

    app.get ('/new/:title',              controller.new);
    
    app.get ('/update/:id/:p1',          controller.update1);
    app.get ('/update/:id/:p1/:p2',      controller.update2);
    app.get ('/update/:id/:p1/:p2/:p3',  controller.update3);

    app.get('/delete/:id',               controller.delete);

    return app;
}