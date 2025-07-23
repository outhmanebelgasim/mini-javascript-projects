function rollDice() {
  const number = Number(document.getElementById("number").value);
  const diceOutput = document.getElementById("result");
  const dicePictures = document.getElementById("pictures");

  let values = [];
  let images = [];

  for (let i = 0; i < number; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    let image = `<img width="100" height="100" src="images/${value}.png">`;
    values.push(value);
    images.push(image);
  }

  diceOutput.textContent = `Dices: ${values.join(" ")}`;
  dicePictures.innerHTML = images.join(" ");
}
