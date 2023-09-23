// a function to return the number of truthy values in the array given
let numbers = ["", 2, 0, 3, 9, undefined, null, 4, 5, 6];
console.log(countTruthy(numbers));
function countTruthy(array) {
  let count = 0;
  for (let key in array) {
    if (array[key]) count += 1;
  }
  return count;
}
