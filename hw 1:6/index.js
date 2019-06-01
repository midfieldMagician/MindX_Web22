const express=require('express');
const app=express();
const port=6969;

//app.use(express.static("html&css"));

//
app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/html&css/homework/index.html");
})
app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+"/html&css/homework/style.css");
})

//KHI EM NHAP /ABOUT/ NÓ MỚI HIỆN RA =((  
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+"/html&css/biography/index.html");
})
app.get('/about/style.css',(req,res)=>{
    res.sendFile(__dirname+"/html&css/biography/style.css");
})




app.listen(port,(err)=>{
if(err)console.log(err);
else console.log("server start success");
})