// model_quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var QuoteSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:2
    },

    quote:{
        type:String,
        required:true,
        minlength:2
    },

}, {timestamps:true} );     

module.exports = mongoose.model('Quote', QuoteSchema);

