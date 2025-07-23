document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const checkBox = document.getElementById("check");
  const js = document.getElementById("js");
  const react = document.getElementById("react");
  const java = document.getElementById("java");
  const sub = document.getElementById("courseSub");
  const item = document.getElementById("courseItem");

  if (checkBox.checked) {
    sub.textContent = "You are subscribed!";
    if (js.checked) {
      item.textContent = "You are enrolled in JavaScript";
    } else if (react.checked) {
      item.textContent = "You are enrolled in React";
    } else if (java.checked) {
      item.textContent = "You are enrolled in Java";
    } else {
      item.textContent = "Please select a course";
    }
  } else {
    sub.textContent = "Please Subscribe First!";
    item.textContent = "";
  }
});
