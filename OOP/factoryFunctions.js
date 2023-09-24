// the factory fanctions that are used to make easy creation of objects
// with the same properties

function createCircle(radius) {
  return {
    radius,
    draw: () => {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle2);
