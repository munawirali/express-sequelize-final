const express = require('express');
const router = express.Router();
const models = require('../models')

router.get('/',(req,res,next)=> {
  models.Suppliers.findAll()
  .then((rows)=>{
    res.render('suppliers_list',{data:rows});
  })
});

router.get('/add',(req,res,next)=> {
  res.render('suppliers_add',{data:rows});
});

router.post('/add',(req,res,next)=> {
  models.Suppliers.create({
    name:`${req.body.name}`,
    name:`${req.body.kota}`,
  })
  .then((rows)=>{
    res.render('suppliers_list',{data:rows});
  })
});
module.exports = router;
