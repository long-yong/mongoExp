// controller.js

const Quote = require('./models');

function show(str) {
    if(str!=null&&str!='') console.log(str); 
}

function set_logger(req,data) {
    req.session.logger = data.name;
}

function get_logger(req,res) {
    res.locals.logger = null;
    if(req.session.logger)
        res.locals.logger = req.session.logger;
}

module.exports = {

    index:(req,res)=>{
        Quote.find()
            .then ((data)=>{res.render('index', {allQuotes:data})})
            .catch((errs)=>{res.render('index', {errors:errs})})
    },

    add: (req,res)=>{
        get_logger(req,res);
        res.render('add');
    },

    add_:(req,res)=>{
        Quote.create(req.body,function(err,data) {
            if(err) {
                for(var key in err.errors) {
                    req.flash('errs',err.errors[key].message);
                }
            } else {
                set_logger(req, data);
            }
            res.redirect('/add');
        });
    },

    clear:(req,res)=>{
        Quote.deleteMany({},(err,res)=>{});
        res.redirect('/index');
    },
    
};

