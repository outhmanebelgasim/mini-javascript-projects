const number = document.getElementById("counter");
const roll = document.getElementById("roll");
let min = 0;
let max = 100;
let numRoll;

roll.addEventListener("click", function (e) {
  e.preventDefault();
  numRoll = Math.floor(Math.random() * (max - min + 1)) + min;
  number.textContent = numRoll;
});
