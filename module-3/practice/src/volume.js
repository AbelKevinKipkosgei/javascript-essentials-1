const width = Number(prompt("Enter width: ", 0));
const height = Number(prompt("Enter height: ", 0));
const length = Number(prompt("Enter length: ", 0));
if (
  Number.isFinite(width) &&
  Number.isFinite(height) &&
  Number.isFinite(length)
) {
  const volume = width * height * length;
  alert(`Volume of the box is: ${volume}`);
} else {
  alert("Invalid value(s)!!! Only use numbers.");
}
