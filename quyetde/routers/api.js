const express=require('express');
const fs=require('fs');
const ApiRouter=express.Router();
const QuestionModel=require('../models/question');


// ApiRouter.get('/vote/:questionId/:vote',(req,res)=>{
//     const questionId=req.params.questionId;
//     const vote=req.params.vote;
    
//     QuestionModel.findOneAndUpdate(
//         {_id:questionId},
//         {$inc:{[vote]:1}},
//         {new:true},
//         (err,questionUpdated)=>{
//             if(err)console.log(err);
//             else {

//                 res.redirect(`/question/${questionUpdated._id}`);
                
//             }
//         }
//         )
//         //QuestionModel.findByIdAndUpdate(questionId,{$inc..}...)
//     });

ApiRouter.get('/vote/:questionId/:vote', (req, res) => {
	const questionId = req.params.questionId;
	const vote = req.params.vote;
	QuestionModel.findOne({ _id: questionId }, (err, questionFound) => {
		if(err) console.log(err)
		else if(!questionFound) console.log("Not found")
		else {
			questionFound[vote] += 1;
			questionFound.save((err, questionUpdated) => {
				if(err) console.log(err)
				else res.redirect(`/question/${questionUpdated._id}`);
			});
		}
	});
});


    ApiRouter.post('/addquestion',(req,res)=>{
        // console.log(req.body);
        // const fileData=fs.readFileSync('question.txt',{encoding:'utf-8'});
        // let quesionList=[];
        // if(fileData){
        //     quesionList=JSON.parse(fileData);
        // }
        
        // const question={
        //     id:quesionList.length,
        //     yes:0,
        //     no:0,
        //     content:req.body.question//quesion from <textarea name="question">
        // }
        // quesionList.push(question);
        // fs.writeFileSync('question.txt',JSON.stringify(quesionList));
        QuestionModel.create({content:req.body.question},(err,questionCreated)=>{
                 if(err)console.log(err);
                 else res.redirect('/');});
        //Chuyển trang
    });    

ApiRouter.get('/randomquestion',(req,res)=>{
    QuestionModel.countDocuments({},(err,totalQuestion)=>{
        if(err)console.log(err);
        else {
            const randomIndex=Math.floor(Math.random()*totalQuestion);
            QuestionModel
            .findOne({})
            .skip(randomIndex)
            //except
            .exec((err,question)=>{
                if(err)console.log(err);
                else{
                    res.send(question);
                }
                
            })
        }
        
    })
    
});
ApiRouter.get('/getById/:questionId',(req,res)=>{

    const questionId=req.params.questionId;
    
    
    
    QuestionModel.findById(questionId,(err,questionFound)=>{
    if(err)console.log(err);
    else if(!questionFound) console.log("Not found");
    else {
        res.send(questionFound);
    }
    
    
})
})
module.exports=ApiRouter;