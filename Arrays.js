// we use an array to store a list of things

let selectedItems = ["red","blue"]; //Array literal

// we use indices to access and change the values in the array at the given index
// the index count starts from 0
console.log(selectedItems[0]);

selectedItems[2] = "green";
console.log(selectedItems);

// in js arrays can have different value types
selectedItems[3] = 2;

console.log(selectedItems);
console.log(typeof selectedItems);
// an array is an object in javascript

// we use length property to fing the length of the array
console.log(selectedItems.length);
