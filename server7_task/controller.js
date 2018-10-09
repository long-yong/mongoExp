// controller.js

const { Task, } = require('./models')

module.exports = {

    getall:(req,res)=>{
        Task.find({})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database find error'}); });
    },

    getone:(req,res)=>{
        Task.findById(req.params.id)
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database find error'}); });
    },

    new:(req,res)=>{
        Task.create({title:req.params.title})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database create error'}); });
    },

    update1:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1}})
        .then(data=>{Task.findById(req.params.id).then(data=>{res.json(data);})})
        .catch(err=>{ res.json({error: 'database update error'}); });
    },

    update2:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1,description:req.params.p2}})
        .then(data=>{Task.findById(req.params.id).then(data=>{res.json(data);})})
        .catch(err=>{ res.json({error: 'database update error'}); });
    },

    update3:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1,description:req.params.p2,completed:req.params.p3}})
        .then(data=>{Task.findById(req.params.id).then(data=>{res.json(data);})})
        .catch(err=>{ res.json({error: 'database update error'}); });
    },

    delete:(req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database remove error'}); });
    },
    
};




