const score = 400; // javascript initially assume it number
//  but we can also exclusively define number

const balance = Number(100)
console.log(balance)

// we can also declare a string as number by Number() method

const stringtoNumber = Number('hello')
console.log(`${stringtoNumber} is a ${typeof(stringtoNumber)}`);

// but eventually javascript cannot declare a string as number so js defined it as NaN(not a number)
// but type can be defined as number

const number = 3;
console.log(number + stringtoNumber); // declared as NaN because string and number can't be added

const nbalance = new Number(100) // new here specially type number as [Number:100]
console.log(nbalance);

console.log(number.toString());
console.log(typeof(number));

console.log(number.toFixed(2)); // gives precision value with 2 more

const otherNumber = 23.453;
console.log(otherNumber.toPrecision(1))
console.log(otherNumber.toLocaleString('en-IN'));


//  Maths
// console.log(Maths);
console.log(Math.abs(-4)); // return positive vale
console.log(Math.round(9.3)); // return round of a number
console.log(Math.ceil(4.6)); // return closest value
console.log(Math.floor(4.9)); // return value before .
console.log(Math.min(4,3,6,8)); // return min value among some values
console.log(Math.max(4,3,6,8)); // return max value among some values

console.log(Math.random()); // return number between 0 and 1
console.log(Math.floor((Math.random() * 10) +1)); // returns number between 0 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min))+min);