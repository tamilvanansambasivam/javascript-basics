// Write a function that checks if a number is even or odd.

function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEven(4)); // Output: Even
console.log(isEven(7)); // Output: Odd
