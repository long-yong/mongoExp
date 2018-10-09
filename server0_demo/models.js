// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var DemoSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:2
    },

    title:{
        type:String,
        required:true,
        minlength:2
    },

}, {timestamps:true} ); 

module.exports = {
    Demo: mongoose.model('Demo', DemoSchema),
}

