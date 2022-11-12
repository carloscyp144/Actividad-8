const router = requiere('express').Router();
const apiInmusRouter=require('./api/inmus');
router.use('/inmuebles',apiInmusRouter);
module.exports=router;