/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
function sumPlusMinus(num)
{
  var plus=0,minus=0;
  for(let k in num)
  {
    
    if(num[k] >= 0)
    {
      plus+=num[k];
    }
    else
    {
      minus+=num[k];
    }
  }
  var obj1={
    plus:plus,
    minus:minus,
  };
  // return `plus : ${plus}\nminus : ${minus}`
  return obj1;
}
console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
