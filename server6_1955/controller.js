// controller.js

const { Demo2, } = require('./models')

module.exports = {

    index:(req,res)=>{
        Demo2.find({})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database find error'}); });
    },

    new:(req,res)=>{
        Demo2.create({name:req.params.name, birthday:req.params.birthday})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database create error'}); });
    },

    remove:(req,res)=>{
        Demo2.findOneAndDelete({name:req.params.name})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database remove error'}); });
    },

    detail:(req,res)=>{
        Demo2.find({name:req.params.name})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json({error: 'database find error'}); });
    },
    
};




