// routes.js

var express = require("express");
const bp = require('body-parser');
const controller = require('./controller');

module.exports = function(app) {
    app.use(bp.json());

    // routes

    app.get ('/',           controller.getall);

    app.get ('/:id',        controller.getone);

    app.post ('/',          controller.new);
    
    app.put ('/:id',        controller.update);

    app.delete('/:id',      controller.delete);

    return app;
}


