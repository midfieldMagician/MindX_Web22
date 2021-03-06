## Practice 2 - Sorting an Array

Write a function `sort` that accept 1 parameter `input`:

```javascript
function sort(input){
  // Your code here
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
```

The data parameter will accept objects in the form of:

```javascript
{
  "input" : [
    /*
     * An unsorted array containing integer numbers ranging from -10000 to 10000.
     */
  ]
}
```

Example piece of data:

```javascript
{
  "input" : [8662, 7484, -4488, 99, -3625, -5847, 1162, 3950, 205]
}
```

The objective of this practice is to write a `sort(input)` function that return an ascending-sorted version of the input array. For the example above, your function should return `[-5847, -4488, -3625, 99, 205, 1162, 3950, 7484, 8662]`.

As with the previous practice, you are not allowed to use the built-in function provided in example, and must write your own algorithm that solve this particular problem.

After you're done submit the folder to your git repository for evaluation.
