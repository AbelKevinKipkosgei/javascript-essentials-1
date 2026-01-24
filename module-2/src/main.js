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
    // console.log(info);
  }
}

// variable shadowing
let counter1 = 100;
console.log(`Global counter: ${counter1}`);
{
  let counter1 = 200;
  console.log(`Local counter: ${counter1}`);
}
console.log(counter1);

//typeof
let year = 1990;
console.log(typeof year);
console.log(typeof 2001);

const firstName = "Abel";
console.log(typeof firstName);
console.log(typeof "Kevin");

let typeOfYear = typeof year;
console.log(typeOfYear);
console.log(typeof typeOfYear);
