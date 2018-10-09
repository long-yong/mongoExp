
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true}, (errs)=>errs?console.log(errs):console.log('db is good to go'));


const CommentSchema = new mongoose.Schema({
    name:     {type: String, required: [true, "Comment must with your name"]},
    comment:  {type: String, required: [true, "Comment must have content"]},
}, {timestamps: true})


const MessageSchema = new mongoose.Schema({
    name:     {type: String, required: [true, "Message must with your name"]},
    message:  {type: String, required: [true, "Message must have content"]},
    comments: [CommentSchema]
}, {timestamps: true})


module.exports = {
    Message: mongoose.model('Message', MessageSchema),
    Comment: mongoose.model('Comment', CommentSchema)
}

