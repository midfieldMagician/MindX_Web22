const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose = require('mongoose');
const ViewRouter=require('./routers/views');
const ApiRouter=require('./routers/api');

mongoose.connect('mongodb://localhost/quyetde-22',{useNewUrlParser:true},(err)=>{
    if(err)console.log(err);
    else console.log("DB connect success!");
});


// app.use((req,res,next)=>{
//     console.log("hello middleware");
//     req.user="Lâm";
//     next();
// });
app.use('/',ViewRouter);
app.use('/api',ApiRouter);



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/public',express.static('public'));

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/views/home.html');
// });




// app.post('/vote',(req,res)=>{
//     const fileData=fs.readFileSync('question.txt',{encoding:'utf-8'});
//     const vote=req.body.vote;
//     const id=req.body.id;
//     let quesionList=[];
//     if(fileData){
//         quesionList=JSON.parse(fileData);
//     }
//     // if(vote=='no'){
//     //     quesionList[id].no++;
//     // } else quesionList[id].yes++;
//     quesionList[id][vote]+=1;
    
//     fs.writeFileSync('question.txt',JSON.stringify(quesionList));
//     res.redirect('/');
    
    
//     // for(var i=0;i<quesionList.length;i++){
//     //     if(quesionList[i].content===currentQuestion){
            
//     //     }
//     // }
// });

//C2(k dùng form, dùng <a href='/vote/questionId/yes')

//kq vote



const port=6969;
app.listen(port,(err)=>{
if(err)console.log(err);
else console.log("server started");
});
