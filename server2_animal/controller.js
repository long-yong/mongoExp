// controller.js

const Animal = require('./models');

function flash_err(req,err) {
    for(var key in err.errors) req.flash('errs',err.errors[key].message);
}

module.exports = {

    index:(req,res)=>{
        Animal.find().then ((data)=>{res.render('index', {allAnimals:data})})
                     .catch((errs)=>{res.render('index', {errors:errs})})
    },

    add: (req,res)=>{
        res.render('add');
    },

    add_:(req,res)=>{
        Animal.create(req.body,(err)=>{
            if(err) flash_err(req,err);
            res.redirect('/add');
        });
    },
    
    edit: (req,res)=>{
        Animal.findById(req.params.id, (err,data)=>{
            res.render('edit',{obj:data});
        });
    },

    edit_:(req,res)=>{
        Animal.updateOne({_id:req.body.id}, req.body, {runValidators:true}, (err)=>{
            if(err) flash_err(req,err);
            res.redirect('/edit/'+req.body.id);
        });
    },

    delete:(req,res)=>{
        Animal.deleteOne( {_id:req.params.id},(err)=>{});
        res.redirect('/index');
    },

    clear:(req,res)=>{
        Animal.deleteMany({},(err,res)=>{});
        res.redirect('/index');
    },
    
};

