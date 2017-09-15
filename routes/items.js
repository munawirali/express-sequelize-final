const express = require('express');
const router = express.Router();
const models = require('../models')

router.get('/',(req,res)=> {
  models.Item.findAll()
  .then((rows)=>{
    res.render('items_list',{data:rows});
  })
  .catch(err=>{
    res.send(err);
  })
});

router.get('/add',(req,res)=> {
  res.render('items_add');
});

///items/add
router.post('/add',(req,res)=> {
  models.Item.create({
    name:`${req.body.name}`,
    brand:`${req.body.brand}`,
    codeitem:`${req.body.codeitem}`
  })
  .then((rows)=>{
    res.redirect('/items');
  })
  .catch(err=>{
    res.send(err);
  })
});

router.get('/edit/:id',(req,res)=> {
  models.Item.findById(req.params.id)
  .then((rows)=>{
    res.render('items_edit',{data:rows});
  })
  .catch(err=>{
    res.send(err);
  })
});

router.post('/edit/:id',(req,res)=> {
  models.Item.update({
    name:`${req.body.name}`,
    brand:`${req.body.brand}`,
    codeitem:`${req.body.codeitem}`
  },{
    where:{
      id:req.params.id
    }
  })
  .then((rows)=>{
    res.redirect('/items');
  })
  .catch(err=>{
    res.send(err);
  })
});

router.get('/delete/:id',(req,res)=> {
  models.Item.destroy({
    where:{
      id:req.params.id
    }
  })
  .then((rows)=>{
    res.redirect('/items');
  })
  .catch(err=>{
    res.send(err);
  })
});

module.exports = router;
