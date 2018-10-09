// controller.js

const Quote = require('./models');

function flash_err(req,err) {
    for(var key in err.errors) req.flash('errs',err.errors[key].message);
}

function set_logger(req,data) {
    req.session.logger = data.name;
}

function get_logger(req,res) {
    res.locals.logger = null;
    if(req.session.logger) res.locals.logger = req.session.logger;
}

function clear_logger (req) {
    req.session.logger = null;
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
            if(err) { flash_err(req,err);    }
            else    { set_logger(req, data); }
            res.redirect('/add');
        });
    },

    clear:(req,res)=>{
        clear_logger(req);
        Quote.deleteMany({},(err,res)=>{});
        res.redirect('/index');
    },
    
};

