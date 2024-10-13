// Problem: Write a function that takes an array of numbers and returns the largest number.

function findLargest(arr) {
  if (arr.length > 0) {
    arr.sort((a, b) => b - a);
    return `largest value in array: ${arr[0]}`;
  } else {
    return "enter valid array";
  }
}

// Example usage:
console.log(findLargest([-10, 2, -3, 44, 5])); // Output: 44
