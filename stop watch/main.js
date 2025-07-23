const display = document.querySelector(".display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    clearInterval(timer);
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, "0");
  let minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(
    2,
    "0"
  );
  let seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(
    2,
    "0"
  );
  let mili = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${mili}`;
}
