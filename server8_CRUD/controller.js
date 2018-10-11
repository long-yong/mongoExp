// controller.js

const { Task, } = require('./models')

function flash_err(req,err) {
    for(var key in err.errors) req.flash('errs',err.errors[key].message);
    if(!err.errors) req.flash('errs',"Database Operation has errors!");
}

module.exports = {

     getall:(req,res)=>{
        Task.find({})
        .then(data=>{ res.render('index',{allTasks:data}); })
        .catch(err=>{ flash_err(req,err); res.render('index',{allTasks:[]}); })
    },

    getone:(req,res)=>{
        Task.findById(req.params.id)
        .then(data=>{ res.render('index',{allTasks:[data]}); })
        .catch(err=>{ flash_err(req,err); res.render('index',{allTasks:[]}); })
    },

    new:(req,res)=>{
        Task.create({title:req.params.p1})
        .then(data=>{ res.render('index',{allTasks:[data]}); })
        .catch(err=>{ flash_err(req,err); res.render('index',{allTasks:[]}); })
    },

    update1:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1}},{new:true,runValidators:true})
        .then(data=>{ res.render('index',{allTasks:[data]}); })
        .catch(err=>{ flash_err(req,err); res.render('index',{allTasks:[]}); })
    },

    update2:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id, {$set: {title:req.params.p1,description:req.params.p2}},{new:true,runValidators:true})
        .then(data=>{ res.render('index',{allTasks:[data]}); })
        .catch(err=>{ flash_err(req,err); res.render('index',{allTasks:[]}); })
    },

    update3:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1,description:req.params.p2,completed:req.params.p3}},{new:true,runValidators:true})
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ flash_err(req,err); res.render('index',{allTasks:[]}); })
    },

    delete:(req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ flash_err(req,err); res.render('index',{allTasks:[]}); })
    },
    
};
