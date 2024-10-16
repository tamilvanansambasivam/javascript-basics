// Write a function that takes a string and returns the reverse of that string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"
