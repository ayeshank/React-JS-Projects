/* CHALLANGE 2 - Const
Answer following Qustions:
  1. Why no error is generated after the line 14?
  2. Why after the line 19 TypeError is generated?

Change one line of code so, that error will go away.
Don't change lines 14, 19.
*/

"use strict";

// const arr = [1, 2];
let arr = [1, 2];        ///// ***************Changed code********************
arr.push(3);
                //Answer 1. Here array is declared const but the array will always add new elements cause it is passed by reference in the memory
console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
               //Answer 2. : Array "arr" is declared const at line 12 so it ocould not be defined again anywhere in program.
//   Assignment to constant variable.
// AFTER: No error
console.log(arr);
// [1, 2, 3, 4]
