// controller.js

const Login = require('./models');

function set_logger(req,data) {
    req.session.logger  = data.name;
    req.session.user_id = data._id;
	req.session.email   = data.email;
}

function get_logger(req,res) {
    res.locals.logger = null;
    if(req.session.logger)
        res.locals.logger = req.session.logger;
}

module.exports = {

    index:(req,res)=>{
        Login.find()
            .then ((data)=>{res.render('index', {allLogins:data})})
            .catch((errs)=>{res.render('index', {errors:errs})})
    },

    add: (req,res)=>{
        get_logger(req,res);
        res.render('add');
    },

    add_:(req,res)=>{
        Login.create(req.body,function(err,data) {
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
        Login.deleteMany({},(err,res)=>{});
        res.redirect('/index');
    },
    
    
};

