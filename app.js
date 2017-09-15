const express = require('express');
const app = express();

app.set(`view engine`,`ejs`);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const index=require('./routes/index');
const suppliers=require('./routes/suppliers');
// const index=require('./routes/items');
// const index=require('./routes/search');

app.use('/',index);
app.use('/suppliers',suppliers);

app.listen(3000,()=>{
  console.log(`My 1st Sequelize Listening on port 3000`);
})
