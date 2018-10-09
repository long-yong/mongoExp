// controller.js

const { Demo, } = require('./models')

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
        Demo.find()
            .then(data=>{res.render('index', {allDemos:data})})
            .catch(err=>{res.render('index', {errors:err})})
    },

    add: (req,res)=>{
        get_logger(req,res);
        res.render('add');
    },

    add_:(req,res)=>{
        Demo.create(req.body)
        .then(data=>{set_logger(req, data)||res.redirect('/add')})
        .catch(err=>{flash_err(req,err)||res.redirect('/add')});
    },

    clear:(req,res)=>{
        clear_logger(req);
        Demo.deleteMany({},(err)=>{res.redirect('/index')});
    },
    
};

