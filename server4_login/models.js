// model_Login.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var LoginSchema = new mongoose.Schema({

    first_name:{
        type:String,
        required:true,
        minlength:1
    },

    last_name:{
        type:String,
        required:true,
        minlength:1
    },

    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: 'Email is required'
    },

    birthday: {
        type:String,
        required:true,
        minlength:1
    },

    password:{
        type:String,
        required:true,
        minlength:1
    },

}, {timestamps:true});

LoginSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
 }, 'Email must be valid')

module.exports = mongoose.model('Login', LoginSchema);
