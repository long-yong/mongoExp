// controller.js

const Animal = require('./models');

function flash_err(req,err) {
    for(var key in err.errors) req.flash('errs',err.errors[key].message);
}

module.exports = {

    index:(req,res)=>{
        Animal.find().then((data)=>{res.render('index', {allAnimals:data})})
                     .catch((err)=>{res.render('index', {errors:err})})
    },

    add: (req,res)=>{
        res.render('add');
    },

    add_:(req,res)=>{
        Animal.create(req.body)
        .then(data=>res.redirect('/add'))
        .catch(err=>flash_err(req,err)||res.redirect('/add'));
    },

    edit: (req,res)=>{
        Animal.findById(req.params.id)
        .then(data=>res.render('edit',{obj:data}));
    },

    edit_:(req,res)=>{
        Animal.findByIdAndUpdate(req.body.id,req.body,{runValidators:true})
        .then(data=>res.redirect('/edit/'+req.body.id))
        .catch(err=>flash_err(req,err)||res.redirect('/edit/'+req.body.id));
    },

    delete:(req,res)=>{
        Animal.findByIdAndDelete(req.params.id)
        .then(data=>console.log('sucess del')||res.redirect('/index'))
        .catch(err=>console.log('failed del')||res.redirect('/index'));
    },

    clear:(req,res)=>{
        Animal.deleteMany({})
        .then(data=>res.redirect('/index'))
        .catch(err=>res.redirect('/index'));
    },

};


