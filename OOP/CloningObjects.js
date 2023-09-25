const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// for (let key in circle) {
//   another[key] = circle[key];
// }

// cloning the object using another way of cloning
// using Object.assign
const another = Object.assign({}, circle);

// using spread operator to clone an object
const anotherCircle = { ...circle };
console.log(anotherCircle);
