// prompts for age, stores answer in a variable
const myAge = prompt("Enter your age:");

// prompts for name
let myName = prompt("Enter your name:");

// changes first letter of name to upper case
const firstLetter = myName.substring(0,1).toUpperCase();

// changes remainder of name to lowercase
myName = firstLetter + myName.substring(1, myName.length).toLowerCase();

// initiates variables for calculations
const earlyYears = 2 * 10.5;
const laterYears = (myAge - 2) * 4;

// final sum for dog years
myAgeInDogYears = earlyYears + laterYears;

// interpolates statement, logs to console
console.log(`My name is ${myName}. I am ${myAge} in human years. This is ${myAgeInDogYears} in dog years.`);
