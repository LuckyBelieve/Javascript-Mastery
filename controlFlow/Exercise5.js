// a function to return the number of truthy values in the array given
function countTruthy(array) {
  let count = 0;
  for (let key in array) {
    if (
      array[key] === undefined ||
      array[key] === 0 ||
      array[key] === null ||
      array[key] === false ||
      array[key] === NaN ||
      array[key] === ""
    ) {
      return;
    } else count++;
  }
}
