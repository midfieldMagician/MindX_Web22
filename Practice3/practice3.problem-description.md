## Practice 3 - Generating test data for Practice 1

Write a function `generate`:

```javascript
function search(input, target) {
  
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
function sort(input) {
  
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
function random(left,right){
  return Math.floor(Math.random*(right-left+1))+left;
}
function generate(testLengthArray){
  // Your code here
  var finalOutput=[];
  var obj={
    input:[],
    target:0,
    output:-1
  }
  
  var arr=[];
  
  for(let i=0;i<testLengthArray.length;i++)
  {
    arr=[];
    
    
    for(let j=0;j<testLengthArray[i];j++){
      arr.push(random(-10000,10000));
    }
    arr=sort(arr);
    obj["input"]=arr;
    
    if (i===0) {
      obj["target"]=arr[0], obj["output"]=0;
    }
    else if (i===1){ 
      obj["target"]=arr[arr.length-1], obj["output"]=arr.length-1;
    }
    else 
    {
      var temp=random(-10000, 10000);
      obj["target"]=temp; 
      obj["output"]=search(arr, temp);
    }
    finalOutput.push(obj);
  }
  return finalOutput;

}
```

In this practice, you will create the generator that was used to create `practice1-test-data.json`. `numberOfTestcases` is the number of tests data that must be generated.

The input `testLengthArray` will be an array of integer. For each number in the array, you must generate a corresponding test data object. Expected output:

```javascript
[
  /*
   * An array of testLengthArray.length test objects in the following format:
   */
  {
    "input": [
      /*
       * A sorted array of integer with length equal to 
       * the corresponding item in testLengthArray.
       *
       * The array is sorted by ascending order,
       * and number is distributed uniformly.
       */
    ],
    "target" : // a number to search for within the array.
    "output" : // expected result of Practice 1's search function (index of target within input)
  },
  ... // more test objects of the same format
]
```

Furthermore, if `testLengthArray.length` is 4 or more. Your returned test cases must have all of the following special cases:

 - *Not found*: `input` doesn't contain `target`.
 - *First index*: `target` is at index `0`.
 - *Last index*: `target` is at index `input.length-1`.
 - *Middle index*: `target` is NOT at index `0` or `input.length-1`.

After you're done submit the folder to your git repository for evaluation.
