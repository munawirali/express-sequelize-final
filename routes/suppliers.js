const express = require('express');
const router = express.Router();
const models = require('../models')

router.get('/',(req,res)=> {
  models.Supplier.findAll({
    include:[{model:models.Item}]
    // include:[{model:model.Teacher}]
  })
  .then((rows)=>{
    // res.send(rows);
    res.render('suppliers_list',{data:rows});
  })
  .catch(err=>{
    res.send(err);
  })
});

router.get('/add',(req,res)=> {
  res.render('suppliers_add');
});

router.post('/add',(req,res)=> {
  models.Supplier.create({
    name:`${req.body.name}`,
    kota:`${req.body.kota}`,
  })
  .then((rows)=>{
    res.redirect('/suppliers');
  })
  .catch(err=>{
    res.send(err);
  })
});

router.get('/edit/:id',(req,res)=> {
  models.Supplier.findById(req.params.id)
  .then((rows)=>{
    res.render('suppliers_edit',{data:rows});
  })
  .catch(err=>{
    res.send(err);
  })
});

router.post('/edit/:id',(req,res)=> {
  models.Supplier.update({
    name:`${req.body.name}`,
    kota:`${req.body.kota}`
  },{
    where:{
      id:req.params.id
    }
  })
  .then((rows)=>{
    res.redirect('/suppliers');
  })
  .catch(err=>{
    res.send(err);
  })
});

router.get('/delete/:id',(req,res)=> {
  models.Supplier.destroy({
    where:{
      id:req.params.id
    }
  })
  .then((rows)=>{
    res.redirect('/suppliers');
  })
  .catch(err=>{
    res.send(err);
  })
});

// /suppliers/<%=rows.id%>/additem
router.get('/:id/additem',(req,res)=> {
  models.Supplier.findById(req.params.id)
  .then((rows)=>{
    models.Items.findAll()
    .then((rowsItems)=>{
      res.render('supplier_add_item',{data:rows,dataItems:rowsItems});
    })
  })
  .catch(err=>{
    res.send(err);
  })
});

module.exports = router;
