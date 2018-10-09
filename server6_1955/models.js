// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var Demo2Schema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:2
    },

    birthday:{
        type:String,
    },

}, {timestamps:false});

module.exports = {
    Demo2: mongoose.model('Demo2', Demo2Schema),
}

