// function to show object's properties that are of string type
let movie = {
  title: "avatar",
  releaseYear: 2009,
  rating: 4.5,
  director: "Director",
};
showProperties(movie);
function showProperties(object) {
  for (let property in object) {
    if (typeof object[property] === "string")
      console.log(property, object[property]);
  }
}
