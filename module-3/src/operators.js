// Assignment Operator
const userName = "Alice";
console.log(userName);

let year = 2050;
let newYear = (year = 2051);
console.log(newYear);

// Arithmetic Operators
const x = 5;
const y = 2;
console.log("addition: ", x + y);
console.log("subtraction: ", x - y);
console.log("multiplication: ", x * y);
console.log("division: ", x / y);
console.log("division remainder: ", x % y);
console.log("exponent: ", x ** y);

// Unary Arithmetic operators
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`);
console.log(`${n1} : ${typeof n1}`);
console.log(`${n2} : ${typeof n2}`);
console.log(`${n3} : ${typeof n3}`);
console.log(`${n4} : ${typeof n4}`);

// Unary increment and decrement operators
let num1 = 10;
let num2 = 10;

console.log("num1: ", num1);
console.log("num1++: ", num1++);
console.log("num1: ", num1);

console.log("num2: ", num2);
console.log("++num2: ", ++num2);
console.log("num2: ", num2);

// Compound Assignment Operator
let v = 10;

v += 2;
console.log(v);
v -= 4;
console.log(x);
v *= 3;
console.log(v);
v /= 6;
console.log(v);
v **= 3;
console.log(v);
v %= 10;
console.log(v);

// Logical Operators
console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string

console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob
