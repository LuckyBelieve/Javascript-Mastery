// Fizzbuzz function mostly interview questions

function Fizzbuzz(input) {
  return typeof input !== "number"
    ? "not a number"
    : input % 3 === 0 && input % 5 === 0
    ? "FizzBuzz"
    : input % 5 === 0
    ? "Buzz"
    : input % 3 === 0
    ? "Fizz"
    : input;
}

let fizzNumber = Fizzbuzz(3);
console.log(fizzNumber);
