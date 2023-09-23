let person = {
firstName: 'John',
location:"Kigali",
age:30
}

for(let key in person){
    console.log(key,person[key]);
}

let colors = ["orange", "red", "green", "yellow"];
for(let index in colors){
    console.log(index,colors[index]);
};