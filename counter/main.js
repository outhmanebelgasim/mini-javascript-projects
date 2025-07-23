let counter = 0;

const deBtn = document.getElementById("de-btn");
const inBtn = document.getElementById("in-btn");
const reBtn = document.getElementById("re-btn");
const digit = document.getElementById("digit");

deBtn.addEventListener("click", function () {
  counter--;
  digit.textContent = counter;
});

inBtn.addEventListener("click", function () {
  counter++;
  digit.textContent = counter;
});

reBtn.addEventListener("click", function () {
  counter = 0;
  digit.textContent = counter;
});
