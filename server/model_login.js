// model_login.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var LoginSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true,
        minlength:2
    },

    pwd:{
        type:String,
        required:true,
        minlength:2
    },

}, {timestamps:false} );

module.exports = mongoose.model('Login', LoginSchema);

