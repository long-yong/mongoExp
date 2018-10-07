// controller.js

const Animal = require('./model_animal');

function show(str) {
    if(str!=null&&str!='') console.log(str); 
}

module.exports = {

    index:(req,res)=>{
        Animal.find()
            .then ((data)=>{res.render('index', {allAnimals:data})})
            .catch((errs)=>{res.render('index', {errors:errs})})
    },

    add: (req,res)=>{
        res.render('add');
    },

    add_:(req,res)=>{
        show('form.name = ' + req.body.name);
        Animal.create(req.body,function(err) {
            if(err) {
                for(var key in err.errors) {
                    req.flash('errs',err.errors[key].message);
                }
            } 
            res.redirect('/add');
        });
    },    

    clear:(req,res)=>{
        Animal.deleteMany({},(err,res)=>show(err));
        res.redirect('/index');
    },
    
};

