const express=require('express');
const ViewRouter=express.Router();
const QuestionModel=require('../models/question');
const path=require('path');


ViewRouter.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../views/home.html'));
    // QuestionModel.find({},(err,questions)=>{
    //     if(err)console.log(err);
    //     else {
    //         var randomIndex=Math.floor(Math.random()*questions.length);
    

    //         // const fileData=fs.readFileSync('question.txt',{encoding:'utf-8'});
    //         // let quesionList=[];
    //         // if(fileData){
    //         //     quesionList=JSON.parse(fileData);
    //         // }
    //         if(questions.length===0){res.send('question empty');}
    //         else{
                
    //             const randomQuestion=questions[randomIndex];
    //             // res.send("<h1>"+randomQuestion.content+"</h1>");
    //             res.send(`
                // <h1>
                // ${randomQuestion.content}
                // </h1>
               
                // <input type="hidden" name="id" value="${randomQuestion._id}">
                // <a href='/vote/${randomQuestion._id}/no'<button type="submit" value="no" name="vote">Sai/không/trái</button></a>
                // <a href='/vote/${randomQuestion._id}/yes'<button type="submit" value="yes" name="vote">Đúng/có/phải</button></a>
               
                // <a href='/question/${randomQuestion._id}'<button>Kết quả vote</button>
                // <a href='/'<button>Câu hỏi khác</button></a>
    //             `);
    //             currentQuestionID=randomQuestion._id;
    //         }
            
    //     }
        
    // });
    // QuestionModel.count({},(err,totalQuestion)=>{
    //     if(err)console.log(err);
    //     else {
    //         const randomIndex=Math.floor(Math.random()*totalQuestion);
    //         QuestionModel
    //         .findOne({})
    //         .skip(randomIndex)
    //         //except
    //         .exec((err,question)=>{
    //             if(err)console.log(err);
    //             else{
    //                 res.send(`
    //             <h1>
    //             ${question.content}
    //             </h1>
               
    //             <input type="hidden" name="id" value="${question._id}">
    //             <a href='/api/vote/${question._id}/no'<button type="submit" value="no" name="vote">Sai/không/trái</button></a>
    //             <a href='/api/vote/${question._id}/yes'<button type="submit" value="yes" name="vote">Đúng/có/phải</button></a>
               
    //             <a href='/question/${question._id}'<button>Kết quả vote</button>
    //             <a href='/'<button>Câu hỏi khác</button></a>
    //             `);
    //             }
                
    //         })
    //     }
        
    // })
    
   
} ); 

ViewRouter.get('/ask',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../views/ask.html'));
   
});

ViewRouter.get('/question/:questionId',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../views/info.html'));
    //  const questionId=req.params.questionId;
     
    // QuestionModel.findById(questionId,(err,questionFound)=>{
    //     if(err)console.log(err);
    //     else if(!questionFound) console.log("Not found");
    //     else {
    //         res.send(`${questionFound.content}|yes:${questionFound.yes}|no:${questionFound.no}`);
            
    //     }
        
        
    // })
    
});


module.exports=ViewRouter;
