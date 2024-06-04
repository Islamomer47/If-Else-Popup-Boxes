// Q1

console.log(-5 * 3); // Output: -15

console.log("JavaScript " + 50); // Output: "JavaScript 50"

console.log(17 % 5); // Output: 2

console.log(5 % 17); // Output: 5

console.log(5 / 10); // Output: 0.5

console.log(4 === "4"); // Output: false

console.log(4 != 5); // Output: true

console.log(7 <= 8); // Output: true

console.log("Hello" + 5); // Output: "Hello5"

let x = 3.14;
console.log(Math.ceil(x) - Math.floor(x)); // Output: 1

console.log(Math.pow(3.14, 2)); // Output: 9.8596

x = 5;
console.log(Math.ceil(x) - Math.floor(x)); // Output: 0

console.log(Math.pow(5, 2)); // Output: 25

// Q2

let number;
number = prompt("Please enter a number:");
alert("The number You entered: " + number);

// Q3

let num1 = prompt("Please enter the first number:");

let num2 = prompt("Please enter the second number:");

if (!isNaN(num1) && !isNaN(num2)) {
  //in ascending order>>>
  if (num1 < num2) {
    alert("The numbers in ascending order: " + num1 + ", " + num2);
  } else {
    alert("The numbers in ascending order: " + num2 + ", " + num1);
  }
} else {
  alert("Please enter valid numbers.");
}
//Q4

let firstNum = prompt("Please enter the first number:");
let secondNum = prompt("Please enter the second number:");

if (!isNaN(firstNum) && !isNaN(secondNum)) {
  if (firstNum > secondNum) {
    alert("The larger number is: " + firstNum);
  } else if (secondNum > firstNum) {
    alert("The larger number is: " + secondNum);
  } else {
    alert("Both numbers are equal: " + firstNum);
  }
} else {
  alert("Please enter valid numbers.");
}

//Q5

let Num = prompt("Please enter the first number:");
let Num1 = prompt("Please enter the second number:");

// Convert input strings to numbers
let num3 = parseFloat(Num);
let num4 = parseFloat(Num1);

if (!isNaN(num3) && !isNaN(num4)) {
  let sum = num3 + num4;
  alert("The sum of the two numbers is: " + sum);
} else {
  alert("Please enter valid numbers.");
}

//Q6
let Number = prompt("Please enter the number:");
let num = parseInt(Number);

switch (num) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  case 4:
    console.log("FOUR");
    break;
  case 5:
    console.log("FIVE");
    break;
  case 6:
    console.log("SIX");
    break;
  case 7:
    console.log("SEVEN");
    break;
  case 8:
    console.log("EIGHT");
    break;
  case 9:
    console.log("NINE");
    break;
  default:
    console.log("PLEASE TRY AGAIN");
}
