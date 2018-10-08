// controller.js

const { Message, Comment, } = require('./models')

module.exports = {

    add: (req,res)=>{
        Message.find()
            .then ((data)=>{res.render('add', {allMessages:data})})
            .catch((errs)=>{res.render('add', {errors:errs})})
    },

    addMessage:(req,res)=>{
        Message.create(req.body,(err)=>{
            if(err) {
                for(var key in err.errors) { req.flash('errs',err.errors[key].message); }
                res.redirect('/add');
            } 
            res.redirect('/add');
        });
    },

    addComment:(req,res)=>{
        Comment.create(req.body,(err,data)=>{
            if(err) {
                for(var key in err.errors) { req.flash('errs',err.errors[key].message); }
                res.redirect('/add');
            } else {
                Message.findOneAndUpdate({_id:req.params.mid},{$push:{comments:data}},(err)=>{
                    res.redirect('/add');
                });
            }
        });
    },

    clear:(req,res)=>{
        Message.deleteMany({},(err,res)=>{});
        Comment.deleteMany({},(err,res)=>{});
        res.redirect('/add');
    },
    
};

