function runClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeStart = `${hours}:${minutes}:${seconds}`;
  document.getElementsByClassName("clock")[0].textContent = timeStart;
}

runClock();
setInterval(runClock, 1000);
