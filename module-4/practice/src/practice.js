// // Exercise 1
// for (let y = 100; y > 0; y -= 10) {
//   console.log(y);
// }

// Exercise 2
let firstNumber = Number(prompt("Enter first number: ", 100));
let lastNumber = Number(prompt("Enter the last number: ", 0));

if (Number.isFinite(firstNumber) && Number.isFinite(lastNumber)) {
  if (lastNumber > firstNumber) {
    alert("Last number cannot be larger than first number!!");
  } else {
    while (firstNumber >= lastNumber) {
      console.log(firstNumber);
      firstNumber -= 10;
    }
  }
} else {
  alert("Input can only be numbers!!");
}
