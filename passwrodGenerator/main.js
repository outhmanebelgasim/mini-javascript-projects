document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const passLength = Number(document.getElementById("length").value);
  const lowerCaseStatus = document.getElementById("lowerCase").checked;
  const upperCaseStatus = document.getElementById("upperCase").checked;
  const numberStatus = document.getElementById("numbers").checked;
  const symbolesStatus = document.getElementById("symbols").checked;
  const result = document.getElementById("generatedPassword");

  function generatePassword(
    length,
    useLower,
    useUpper,
    useNumbers,
    useSymbols
  ) {
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChar = "0123456789";
    const symbolsChar = "!@#$%^&*()_+=?/><~|";

    let possibleChars = "";
    let password = "";

    if (useLower) possibleChars += lowerCaseChar;
    if (useUpper) possibleChars += upperCaseChar;
    if (useNumbers) possibleChars += numbersChar;
    if (useSymbols) possibleChars += symbolsChar;

    if (possibleChars.length === 0) {
      return "Please select at least one character type!";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChars.length);
      password += possibleChars[randomIndex];
    }

    return password;
  }

  const password = generatePassword(
    passLength,
    lowerCaseStatus,
    upperCaseStatus,
    numberStatus,
    symbolesStatus
  );
  result.textContent = password;
});
