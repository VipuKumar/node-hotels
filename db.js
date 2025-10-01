const mongoose=require('mongoose');
const mongoURL='mongodb://127.0.0.1:27017/hotels';
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected to mongodb server");

})
db.on('error',()=>{
    console.log("error to mongodb server");

})
db.on('disconnected',()=>{
    console.log("disconnected to mongodb server");

})
module.exports=db;
