// model_Animal.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var AnimalSchema = new mongoose.Schema({

    name:{
        type:String,
    },

    intro:{
        type:String,
        required:true,
        minlength:5
    },

}, {timestamps:true} ); 

module.exports = mongoose.model('Animal', AnimalSchema);

