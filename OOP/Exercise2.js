// using factory functions and constructor functions
function adressFactory(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}

const street = adressFactory("kk509st", "Kigali", 5000);
// console.log(street);

function AdressFactory(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}
const anotherStreet = new AdressFactory("kk509st", "Kigali", 5000);
console.log(anotherStreet);
