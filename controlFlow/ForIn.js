let person = {
  firstName: "John",
  location: "Kigali",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

let colors = ["orange", "red", "green", "yellow"];
for (let index in colors) {
  console.log(index, colors[index]);
}

// we basically use for in loops to iterate through the objects properties and on the
// other hand we use for of loop to iterate through indices of the array

// for of loop

for(let color of colors) {
    console.log(color);
}
