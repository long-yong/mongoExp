// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var TaskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        minlength:2
    },

    description:{
        type:String,
    },

    completed:{
        type:Boolean,
        default: false,
    },

}, {timestamps:false});

module.exports = {
    Task: mongoose.model('Task', TaskSchema),
}

