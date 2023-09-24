// adding the multiples of 5 and three in the given range
console.log(sum(10));
function sum(Limit) {
  let sum = 0;
  for (let i = 1; i <= Limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

