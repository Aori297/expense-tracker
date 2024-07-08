const form = document.querySelector("form");
const input1 = document.getElementById("name");
const input2 = document.getElementById("money");
const nlist = document.querySelector(".nlist");
const mlist = document.querySelector(".mlist");
const category = document.getElementById(".category");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Alerts user if the input field is empty.
  if (input1.value.trim() === "") {
    alert("Please provide a name.");
    return;
  }
  if (input2.value.trim() === "") {
    alert("Please provide the amount.");
    return;
  }

  // Creates new div class and stores the input value in it for.
  const item1 = document.createElement("li");
  const item2 = document.createElement("li");
  item1.innerHTML = input1.value;
  item2.innerHTML = input2.value;
  nlist.appendChild(item1);
  mlist.appendChild(item2);
  input1.value = "";
  input2.value = "";
});
