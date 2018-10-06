// routes.js

var express = require("express");
var session = require('express-session');
const bp = require('body-parser');
const controller = require('./controller');

module.exports = function(app) {
    app.use(session({secret:'keyboardkitteh12345yong', resave:false, saveUninitialized:true, cookie:{maxAge:60000}}));
    app.use(express.static(__dirname + "/static"));
    app.set('views', __dirname + '/views');
    app.set('view engine', "ejs");
    app.use(bp.urlencoded({extended:true}));

    // routes
    app.get ('/',           controller.index);
    app.get ('/quotes',     controller.getAll);
    app.post('/quotes',     controller.createQuote);

    return app;
}