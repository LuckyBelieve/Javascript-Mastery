// determining the even number or odd number in the given range of numbers from 0
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 == 0 ? '"EVEN"' : '"ODD"';
    console.log(i, message);
  }
}
showNumbers(10);
