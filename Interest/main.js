function calculate() {
  const result = document.getElementById("result");
  const years = document.getElementById("year");
  const interest = document.getElementById("rate");
  const principalAmount = document.getElementById("principal");

  let principal = principalAmount.value;
  let rate = interest.value / 100;
  let year = years.value;

  if (principal < 0) {
    principal = 0;
    result.textContent = window.alert(
      "The Principal Amount Must Be Grater Than 0"
    );
  } else if (rate < 0) {
    rate = 0;
    result.textContent = window.alert(
      "The Interest Rate Must Be Grater Than 0"
    );
  } else if (year < 0) {
    year = 0;
    result.textContent = window.alert("The Years Must Be Grater Than 0");
  } else {
    const resultValue = principal * Math.pow(1 + rate / 1, 1 * year);
    result.textContent = `The Result is: ${resultValue.toLocaleString(
      undefined,
      {
        style: "currency",
        currency: "USD",
      }
    )}`;
  }
}
