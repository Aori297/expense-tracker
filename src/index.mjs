// Select things from html
const form = document.querySelector("form");
const expenseName = document.getElementById("name");
const expenseAmount = document.getElementById("money");
const category = document.getElementById("cat");
const nlist = document.querySelector(".nlist");
const mlist = document.querySelector(".mlist");
const clist = document.querySelector(".clist");
const tableBody = document.getElementById("expenses-table");

const categories = document.querySelectorAll("select#cat>option");

let totalValue = 0;
const expenseMap = {};
categories.forEach((cat) => (expenseMap[cat.innerText] = 0));

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Alerts user if the input fields are empty.
  if (expenseName.value.trim() === "") {
    alert("Please provide a name.");
    return;
  }
  if (expenseAmount.value.trim() === "") {
    alert("Please provide the amount.");
    return;
  }

  const currentDate = new Date().toLocaleDateString();

  // Creates new div class and stores the input value in it for.

  const newRow = document.createElement("tr");
  const dateCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const categoryCell = document.createElement("td");
  const amountCell = document.createElement("td");

  dateCell.textContent = currentDate;
  nameCell.textContent = expenseName.value;
  categoryCell.textContent = category.options[category.selectedIndex].text;
  amountCell.textContent = expenseAmount.value;
  expenseMap[categoryCell.textContent] += parseFloat(amountCell.textContent);
  updateTotalAmount(expenseAmount.value);

  // Creates new div class and stores the
  newRow.appendChild(dateCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(categoryCell);
  newRow.appendChild(amountCell);

  // Appending the new row to the table
  tableBody.appendChild(newRow);

  // Clears the input field after submitting
  expenseName.value = "";
  expenseAmount.value = "";

  console.log(totalValue);
  console.table(expenseMap);
});

function updateTotalAmount(amount) {
  totalValue += parseFloat(amount);
}
