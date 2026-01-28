// calculator program
const firstNumber = Number(prompt("Enter first number: ", 10));
const secondNumber = Number(prompt("Enter second number: ", 12));
const operator = prompt("Enter an operator: (+, -, *, /)", "*");

switch (operator) {
  case "+":
    const sum = firstNumber + secondNumber;
    alert(`Sum: ${sum}`);
    break;
  case "-":
    const difference = firstNumber + secondNumber;
    alert(`Difference: ${difference}`);
    break;
  case "*":
    const multiplication = firstNumber * secondNumber;
    alert(`Multiplication: ${multiplication}`);
    break;
}
