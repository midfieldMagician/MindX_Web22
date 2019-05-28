'use strict'

function search(input, target) {
  // return input.indexOf(target);  // Remove this line and change to your own algorithm
  var leftIndex=0;
  var rightIndex=input.length-1;
  var midIndex;
  var mid
        if(rightIndex<leftIndex)return -1;
        while(rightIndex>=leftIndex){ 
            midIndex =  (rightIndex +leftIndex-(rightIndex+leftIndex)%2)/2;
            mid=input[midIndex];
            if (mid === target) 
                return midIndex; 
            else if (mid > target) {
                rightIndex=midIndex-1;
                 }
            else {
              leftIndex=midIndex+1;
               }
        } 
        if(target===input[midIndex])return midIndex;
        else return -1;
         
  
}

module.exports = search
