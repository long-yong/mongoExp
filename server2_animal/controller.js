// controller.js

const Animal = require('./models');

function show(str) {
    if(str!=null&&str!='') console.log(str); 
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
            if(err) {
                for(var key in err.errors) {
                    req.flash('errs',err.errors[key].message);
                }
            }
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
            if(err) {
                for(var key in err.errors) {
                    show(err.errors[key].message);
                    req.flash('errs', err.errors[key].message);
                }
            }
            res.redirect('/edit/'+req.body.id);
        });
    },

    delete:(req,res)=>{
        console.log(req.params.id);
        Animal.deleteOne( {_id:req.params.id},(err)=>{});
        res.redirect('/index');
    },

    clear:(req,res)=>{
        Animal.deleteMany({},(err,res)=>{});
        res.redirect('/index');
    },
    
};

