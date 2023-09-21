let interestRate = 0.3;
// overiding the variable
interestRate= 1;
console.log(interestRate);
// the output will be 1

// but for constants the value can not be changed
const paymentRate = 0.3;
// paymentRate= 1; //overiding a constant will cause an error
console.log(paymentRate);

// so concluding if you don't want to reassign the variable use const 
// if you want to reassign the variable use let keyword instead