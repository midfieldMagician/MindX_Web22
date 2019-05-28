'use strict'

function sort(input) {
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  function quicksort(left,right){
  
  var l=left;
  var r=right;
  var mid=input[(right +left-(right+left)%2)/2];
  if(l>r)return -1;
  while(l<=r){
    while(input[l]<mid)l++;
    while(input[r]>mid)r--;
    if(l<=r){
      var x= input[l];
      input[l]=input[r];
      input[r]=x;
      }
  }
  if(left<r)quicksort(left,j);
  if(right>i)quicksort(i,right);
  
}
quicksort(0,input.length-1);
}


module.exports = sort
