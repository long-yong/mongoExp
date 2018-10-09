// controller.js

const Login = require('./models');

function flash_err(req,err) {
    for(var key in err.errors) req.flash('errs',err.errors[key].message);
    if(!err.errors) req.flash('errs',"Email already existed!");
}

function flash_err2(req,err) {
    for(var key in err.errors) req.flash('errs2',err.errors[key].message);
}

function set_logger(req,data) {
    req.session.logger  = data.first_name +" "+ data.last_name 
}

function get_logger(req,res) {
    res.locals.logger = null;
    if(req.session.logger)
        res.locals.logger = req.session.logger;
}

function clear_logger(req) {
    req.session.logger = null;
}

module.exports = {

    index:(req,res)=>{
        Login.find()
            .then((data)=>{res.render('index', {allLogins:data})})
            .catch((err)=>{res.render('index', {errors:err})})
    },

    add: (req,res)=>{
        get_logger(req,res);
        res.render('add');
    },

    add_:(req,res)=>{
        if(req.body.password!=req.body.passwordcmf) {
            req.flash('errs',"Password must match passwordcmf!");
            res.redirect('/add');
        }
        else Login.create(req.body,function(err,data) {
            if(err) flash_err(req,err);
            else    set_logger(req, data);
            res.redirect('/add');
        });
    },

    login:(req,res)=>{
        if(req.body.email=='' || req.body.password =='') {
            if(req.body.email=='') req.flash('errs2','Email is required');
            else                   req.flash('errs2','Password is required');
            res.redirect('/add');
        }   else  {
            Login.findOne({'email':req.body.email},(err,data) => {
                if(!data) {
                    req.flash('errs2','Email do not exist');
                    res.redirect('/add');
                }
                else Login.findOne({'email':req.body.email, 'password':req.body.password},(err,data) => {
                    if(!data) req.flash('errs2','Password do not match');
                    else set_logger(req,data);
                    res.redirect('/add');
                });
            });
        }
    },

    logout:(req,res)=>{
        clear_logger(req);
        res.redirect('/add');
    },

    clear:(req,res)=>{
        clear_logger(req);
        Login.deleteMany({},(err)=>{ res.redirect('/index'); });
    },

};

