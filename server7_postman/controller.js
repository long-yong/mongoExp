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
        Task.create(req.body)
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database create error'}); });
    },

    update:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,req.body)
        .then(data=>{Task.findById(req.params.id).then(data=>{res.json(data);})})
        .catch(err=>{ res.json({error: 'database update error'}); });
    },

    delete:(req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database remove error'}); });
    },
    
};




