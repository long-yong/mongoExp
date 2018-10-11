// controller.js

const { Task, } = require('./models')

module.exports = {

    getall:(req,res)=>{
        Task.find({})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json(err);  });
    },

    getone:(req,res)=>{
        Task.findById(req.params.id)
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json(err);  });
    },

    new:(req,res)=>{
        Task.create(req.body)
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json(err);  });
    },

    update:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json(err);  });
    },

    delete:(req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database remove error'}); });
    },

};




