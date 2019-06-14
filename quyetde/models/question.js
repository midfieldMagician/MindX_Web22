const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const model=mongoose.model;

const QuestionSchema=new Schema({
    yes:{type:Number,
        default:0
    },
    no:{type:Number,
        default:0
    },
    content:{
        type:String,
        required:true
    }
});
const QuestionModel=model('Question',QuestionSchema);

module.exports=model('Question',QuestionSchema);
// 

// QuestionModel.create({content:"hello"},(err,questionCreated)=>{
//     if(err)console.log(err);
//     else console.log('Question created: ',questionCreated);
    
    
// })