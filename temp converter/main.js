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
