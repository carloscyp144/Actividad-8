const router = requiere('express').Router();
const inmu=require('../../models/inmueble.model');
router.get('/',(req,res)=>{
    inmu.find()
    .then(inmus=>res.json(inmus))
    .catch(err=>res.json({error:err.mensage}));
});
router.post('/',(req,res)=>{
    inmu.create(req.body)
    .then(inmus=>res.json(inmus))
    .catch(err=>res.json({error:err.mensage}));
});
router.put('/:id',(req,res)=>{
    inmu.findByIdAndUpdate(req.params.id,req.body)
    .then(inmus=>res.json(inmus))
    .catch(err=>res.json({error:err.mensage}));
});
router.delete('/:id',(req,res)=>{
    inmu.findByIdAndDelete(req.params.id)
    .then(inmus=>res.json(inmus))
    .catch(err=>res.json({error:err.mensage}));
});
module.exports=router;