//LỖI
const fs=require('fs');

const fileData=fs.readFileSync('question.txt',{encoding:'utf-8'});
    let quesionList=[];
    if(fileData){
        quesionList=JSON.parse(fileData);
    }
var randomID=Math.floor(Math.random()*quesionList.length);
var questionShown=quesionList[randomID].content;




    
