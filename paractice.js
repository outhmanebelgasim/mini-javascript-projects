/*
let a = -9;
let b = 10;
let e = 2;
let c = 4.87;
let d;

// let min = Math.min(a, b, c);
// console.log(min);

// d = Math.round(c);
// d = Math.trunc(c);
// d = Math.ceil(c);
// d = Math.floor(c);
// d = Math.pow(b, e);
console.log(d);
*/
// let a = "Great";
// switch (a) {
//   case "Great":
//     console.log("Win");
//     break;
//   default:
//     console.log("Lose");
// }

/* 
let fullName = "Outhmane Belgasim";
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.charAt(2));
console.log(fullName.indexOf("B"));
console.log(fullName.lastIndexOf("e"));
console.log(fullName.repeat(2));
console.log(fullName.startsWith("O"));
console.log(fullName.endsWith("i"));
console.log(fullName.includes("g"));
let mobileNumber = "+212617-109590";
mobileNumber = mobileNumber.replaceAll("-", "");
console.log(mobileNumber);
*/
/*
let fullName = "Outhmane Belgasim";
let firstName = fullName.slice(0, 8);
let lastName = fullName.slice(fullName.indexOf("B"));
console.log(firstName);
console.log(lastName);

const email = "belgasimouthmane123@gmail.com";
let emailName = email.slice(0, email.indexOf("@"));
let emailHost = email.slice(email.indexOf("@") + 1);
console.log(emailName);
console.log(emailHost);
*/
/*
let fullName = window.prompt("Enter Your Full Name");
let userName = fullName.replaceAll(" ", "").toLowerCase().slice(0, 20);
console.log(userName);
*/
/*
let x = "";
while (x == "" || x == null) {
  x = window.prompt("Enter your name");
  console.log(`Hello Mr ${x}`);
}
*/

// do {
//   let loggedIn = false;
//   let userName = prompt("Enter your username:");
//   let password = prompt("Enter your password:");

//   if (userName === "Outhmane" && password === "1234") {
//     console.log("You are logged in");
//     loggedIn = true;
//   } else {
//     console.log("Invalid username or password. Try again.");
//   }
// } while (!loggedIn);

// let y = 0;
// while (y < 10) {
//   y++;
//   console.log(y);
// }

// let minValue = 50;
// let maxValue = 100;
// let result = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
// let attempt = 0;
// let start = true;
// let guess;

// while (start) {
//   guess = window.prompt(`Enter a number between ${minValue} and ${maxValue}`);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     alert(`Enter ONLY numbers!`);
//   } else if (guess > maxValue || guess < minValue) {
//     alert(`The number must be between ${minValue} - ${maxValue}`);
//   } else {
//     attempt++;
//     if (guess < result) {
//       alert(`${guess} is too low`);
//     } else if (guess > result) {
//       alert(`${guess} is too high`);
//     } else {
//       alert(
//         `You guessed the right number: ${guess}, after ${attempt} attempts`
//       );
//       start = false;
//     }
//   }
// }

/*
let fullName = "outhmane";
let array = [fullName];
// array = [...fullName];
console.log(array);

let cars = ["toyota", "mercedes", "porch"];
let newCars = [...cars];
console.log(newCars);
*/
/*
function carDealer(...cars) {
  console.log(...cars);
}

function getCar(...cars) {
  return cars;
}

let dispoCar = ["toyota", "mercedes", "porch"];
carDealer(...dispoCar);
let cars = getCar(...dispoCar);
console.log(...cars);
*/

/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach(squareNum);

function mathNum(element) {
  let result = element * 2;
  console.log(result);
}

function squareNum(element, index, array) {
  array[index] = element ** 2;
  console.log(array[index]);
}

let cars = ["Toyota", "Ferrari", "Dacia", "Porsh"];
cars.forEach(carsElementUpperCase);

function carsElementUpperCase(element) {
  let result = element.toLowerCase();
  console.log(result);
}
 */

/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = array.map(function square(element) {
  return Math.pow(element, 2);
});

console.log(newArray);

let cars = ["Toyota", "Ferrari", "Dacia", "Porsh"];
let newCars = cars.map((element) => element.toLowerCase());
console.log(newCars);
*/

/*
let cars = ["Toyota", "Ferrari", "Dacia", "Porsh"];
let newCars = cars.filter((element) => element.length <= 5);
console.log(newCars);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = array.filter((element) => element % 2 === 0);
console.log(...newArray);
*/

/*
let numbers = [1, 2, 3, 4, 5, 1, 4, 7, 9, 2, 3, 5, 6, 6, 7, 8, 9];
let newNumbers = numbers.filter(
  (element, index) => numbers.indexOf(element) === index
);

console.log(newNumbers);
*/

/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = array.reduce(function sum(prev, next) {
  return prev + next;
});
console.log(newArray);

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray1 = array.reduce(function max(prev, next) {
  return Math.max(prev, next);
});
console.log(newArray1);
*/

/*
function Car(make, model, color, year) {
  (this.Make = make),
    (this.Model = model),
    (this.Color = color),
    (this.Year = year),
    (this.Manual = function () {
      console.log(`This How To Drive ${this.Make} ${this.Model}`);
    });
}

const car1 = new Car("Mercedes", "G-Class", "Black", 2024);
console.log(car1.Color);
console.log(car1.Year);
console.log(car1.Make);
car1.Manual();
*/

/*
class Car {
  constructor(brand, model, year) {
    (this.Brand = brand), (this.Model = model), (this.Year = year);
  }

  carBrand() {
    console.log(`The Brand is: ${this.Brand}`);
    console.log(`The Model is: ${this.Model}`);
    console.log(`Production Year is: ${this.Year}`);
  }
}

const car = new Car("Nissan", "GTR", 2014);
car.carBrand();
*/

/*======================================================================== */
/*
let cars = ["Toyota", "Ferrari", "Dacia", "Porsh"];
const [car1, ...otherCars] = cars;
console.log(otherCars);

function studentDetails({ firstName, lastName, age, isGraduate }) {
  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(isGraduate);
}

const Student = {
  firstName: "outhmane",
  lastName: "Belgasim",
  age: 20,
  isGraduate: true,
};

studentDetails(Student);
*/
/*
class Student {
  constructor(firstName, lastName, Age, ...adress) {
    (this.FirstName = firstName),
      (this.LastName = lastName),
      (this.Age = Age),
      (this.Adress = new Adress(...adress));
  }
}

class Adress {
  constructor(state, city, street) {
    (this.State = state), (this.City = city), (this.Street = street);
  }
}

const student = new Student(
  "outhmane",
  "belgasim",
  20,
  "Marrakech Safi",
  "Marrakech",
  "Mhamid 7 Askejour"
);
console.log(student.FirstName);
console.log(student.LastName);
console.log(student.Age);
console.log(student.Adress.State);
console.log(student.Adress.City);
console.log(student.Adress.Street);
*/
/*
const cars = [
  { make: "Tesla", model: "Roadster", color: "red", mileage: 1000 },
  { make: "Honda", model: "Civic", color: "black", mileage: 2500 },
  { make: "Toyota", model: "Corolla", color: "red", mileage: 3000 },
  { make: "Nissan", model: "Murano", color: "white", mileage: 1800 },
];

cars.forEach((car) => console.log(car.make));
const myCars = cars.map((element) => element.mileage);
const myNewCars = cars.filter((element) => element.mileage > 1000);
const latestCars = myNewCars.map((element) => element.make);
console.log(myCars);
console.log(myNewCars);
console.log(latestCars);
*/

/*
const numbers = [18, 98, 1, 3, 5, 2, 72, 212, 121, 8, 14];
numbers.sort((x, y) => x - y);
console.log(numbers);

const cars = [
  { make: "Tesla", model: "Roadster", color: "red", mileage: 1000 },
  { make: "Honda", model: "Civic", color: "black", mileage: 2500 },
  { make: "Toyota", model: "Corolla", color: "red", mileage: 3000 },
  { make: "Nissan", model: "Murano", color: "white", mileage: 1800 },
];

cars.sort((x, y) => x.make.localeCompare(y.make));
console.log(cars);
*/
/*
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const time = date.getTime();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(time);
*/

/*
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter();
counter();
counter();
*/

// const timeOut = setTimeout(() => window.alert("Hello world"), 3000);

/*
let timeOutId;
function startTimer() {
  timeOutId = setTimeout(() => window.alert("Hello World"), 3000);
  console.log("Timer Just started");
}

function clearTimer() {
  clearTimeout(timeOutId);
  console.log("Timer Just Stopped");
}

let num = 142737626.7383;
num = num.toLocaleString();
console.log(num);
*/
