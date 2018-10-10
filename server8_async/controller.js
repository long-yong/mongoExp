// controller.js

const { Task, } = require('./models')

module.exports = {

    /*
            Message.find()
            .then ((data)=>{res.render('add', {allMessages:data})})
            .catch((errs)=>{res.render('add', {errors:errs})})
    */

    getall:(req,res)=>{
        Task.find({})
        .then(data=>{res.render('index', {allTasks:data})})
        .catch(err=>{ res.json({error: 'database find error'}); });
    },

    getone:(req,res)=>{
        Task.findById(req.params.id)
        .then(data=>{res.render('index', {allTasks:[data]})})
        .catch(err=>{ res.json({error: 'database find error'}); });
    },

    new:(req,res)=>{
        Task.create({title:req.params.title})
        .then(data=>{res.render('index', {allTasks:[data]})})
        .catch(err=>{ res.json({error: 'database new error'}); });
    },

    update1:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1}})
        .then(data=>{Task.findById(req.params.id).then(data=>{res.render('index', {allTasks:[data]})})})
        .catch(err=>{ res.json({error: 'database update error'}); });
    },

    update2:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1,description:req.params.p2}})
        .then(data=>{Task.findById(req.params.id).then(data=>{res.render('index', {allTasks:[data]})})})
        .catch(err=>{ res.json({error: 'database update error'}); });
    },

    update3:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1,description:req.params.p2,completed:req.params.p3}})
        .then(data=>{Task.findById(req.params.id).then(data=>{res.render('index', {allTasks:[data]})})})
        .catch(err=>{ res.json({error: 'database update error'}); });
    },

    delete:(req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(data=>{res.render('index', {allTasks:[data]})})
        .catch(err=>{ res.json({error: 'database delete error'}); });
    },
    
};
