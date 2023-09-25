// creating an object and display all of its properties
const adress = {
  street: "Street",
  city: "Kigali",
  zipcode: 2400,
};

function displayProperties(adress) {
  for (let key in adress) {
    console.log(key, adress[key]);
  }
}
displayProperties(adress);
