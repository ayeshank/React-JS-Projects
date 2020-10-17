/* CHALLENGE 4 - Hoisting

Change code to fix first error after the line 15.
Error after the line 20 should still be generated.
*/

"use strict";

var a = 5,
  b = 10;

if (b > a) 
{
  let c = 2;
  let z = a + b + c;
  console.log(z);
  // BEFORE: Uncaught ReferenceError: c is not defined
  // AFTER: 17
}

console.log(c);
// Uncaught ReferenceError: c is not defined
