// caluculating the average marks of the students
const marks = [80, 90, 50, 40, 49];
console.log(calculateAverage(marks));
function calculateAverage(marks) {
  let totalMarks = 0;
  for (let mark of marks) {
    totalMarks += mark;
  }
  let average = totalMarks / marks.length;

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}
