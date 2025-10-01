const express = require('express')
const app = express()
const db=require('./db');
const menuitem=require('./models/menu');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const personroutes=require('./routes/personroutes');
app.use('/person',personroutes);
const menuroutes=require('./routes/menuitemroutes');
app.use('/menu',menuroutes);
app.get('/', function (req, res) {
  res.send('welcome to my hotel')
})
app.listen(3000,()=>{
    console.log("listening on port 3000");
})