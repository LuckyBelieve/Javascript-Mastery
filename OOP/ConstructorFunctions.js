// constructor functions are also used for creating
// multiple objects with the same properties

function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw");
  };
}

const circle = new Circle(1);

// in factory functions we return an object
// in constructor functions we use this and use the "new" keyword when creating new objects

// every object have a constructor property that give the information that is 
// function that have created that object
