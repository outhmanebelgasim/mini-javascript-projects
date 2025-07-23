/* var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age <= 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Do something");
    break;
  case "Tuesday":
    console.log("Do something");
    break;
  case "Wenesday":
    console.log("Do something");
    break;
  case "Thursday":
    console.log("Do something");
    break;
  case "Friday":
    console.log("Do something");
    break;
  case "Saturday":
    console.log("Do something");
    break;
  case "Sunday":
    console.log("Do something");
    break;
  default:
    console.log("There is no such day");
}

var cubes = "ABCDEFGH";
for (var i = 0; i < cubes.length; i++) {
  let style =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], style);
}
function letterFounder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at ", i);
    } else {
      console.log("--No match found at", i);
    }
  }
}
let word = ["t", "i", "v", "t"];
letterFounder(word, "t");

var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
  speed: 200,
  altitude: 100,
  color: "red",
};

for (let i = 0; i < arrOfKeys.length; i++) {
  if (arrOfKeys[i] == "speed") {
    console.log("Speed is:", drone[arrOfKeys[i]]);
  } else if (arrOfKeys[i] == "altitude") {
    console.log("altitude is:", drone[arrOfKeys[i]]);
  } else if (arrOfKeys[i] == "color") {
    console.log("color is:", drone[arrOfKeys[i]]);
  }
}

let num = window.prompt("insert a number");
num = Number(num);
num += 2;
console.log(num, typeof num);
*/

/*
let a = "";
let b = "1";
let c = "";
a = String(a);
b = Number(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
*/

let x = 9 / 5;
let y = 5 / 9;
const k = 32;

document.getElementById("tempForm").onsubmit = function (e) {
  e.preventDefault();
  const degre = Number(document.getElementById("number").value);
  const isCelicius = document.getElementById("celicius").checked;
  const isFah = document.getElementById("Fahrenheit").checked;
  const result = document.getElementById("result");
  let temp;

  if (isCelicius) {
    temp = degre * x + k;
    result.textContent = temp.toFixed(2) + "C";
  } else if (isFah) {
    temp = (degre - k) * y;
    result.textContent = temp.toFixed(2) + "F";
  } else {
    result.textContent = "Choose a Unite";
  }
};
