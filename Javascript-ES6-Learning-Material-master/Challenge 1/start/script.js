/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";
function sum(...params){
    let sumup=0;
    sumup=params.reduce((a,b)=>a+b)
console.log("Total sum : "+sumup)
}

sum(1,23,45,6);










