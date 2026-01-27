// conditional statements
// if...statement, if...else...
const isUserReady = confirm("Are you ready?");
console.log(isUserReady);

if (isUserReady) {
  alert("User Ready!");
} else {
  alert("User not ready!");
}

// if...else if...
let number = prompt("Enter a number", 0);
if (number < 10) {
  alert("<10");
} else if (number < 30) {
  alert("<30");
} else if (number < 60) {
  alert("<60");
} else if (number < 90) {
  alert("<90");
} else if (number === 100) {
  alert("100");
} else {
  alert(">100");
}

// conditional operator
const price = prompt("Enter price of item: ", 70);
const shippingCost = price > 50 ? 0 : 5;
console.log(`price = ${price}, shipping = ${shippingCost}`);
