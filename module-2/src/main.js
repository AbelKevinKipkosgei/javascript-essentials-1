"use strict";

// variables
let greeting = "Hello";
let counter = 100;

console.log(greeting);
console.log(counter);

greeting = "Hello, Abel Kevin";
counter = counter + 120;

console.log("Modified greeting: " + greeting);
console.log("Modified counter: " + counter);

// constants
// correct
const greeting1 = "Hello";
console.log("Constant greeting: " + greeting1);

// wrong
// const greeting2;
// greeting2 = "Hello";

// scope
let height = 200;
{
  let weight = 100;
  {
    let info = "tall";
    console.log(height);
    console.log(weight);
    console.log(info);
  }
  {
    console.log(height);
    console.log(weight);
    console.log(info);
  }
}
