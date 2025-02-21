let displayValue = "0";
let operator = "";
let firstOperand = "";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function appendNumber(number) {
  if (displayValue === "0" || operator === "=") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (firstOperand !== "" && operator !== "" && operator !== "=") {
    calculateResult();
  }
  firstOperand = displayValue;
  operator = op;
  displayValue = "0";
  updateDisplay();
}

function calculateResult() {
  if (firstOperand === "" || operator === "=") return;

  let secondOperand = displayValue;
  let result;

  if (operator === "+") {
    result = parseFloat(firstOperand) + parseFloat(secondOperand);
  } else if (operator === "-") {
    result = parseFloat(firstOperand) - parseFloat(secondOperand);
  } else if (operator === "*") {
    result = parseFloat(firstOperand) * parseFloat(secondOperand);
  } else if (operator === "/") {
    if (secondOperand === "0") {
      displayValue = "Error";
      updateDisplay();
      return;
    }
    result = parseFloat(firstOperand) / parseFloat(secondOperand);
  }

  displayValue = result.toString();
  operator = "=";
  firstOperand = displayValue;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  operator = "";
  firstOperand = "";
  updateDisplay();
}

updateDisplay();
