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
  if (operator !== "") {
    calculateResult();
  }
  operator = op;
  firstOperand = displayValue;
  displayValue = "0";
  updateDisplay();
}

function calculateResult() {
  if (operator === "+") {
    displayValue = (parseFloat(firstOperand) + parseFloat(displayValue)).toString();
  } else if (operator === "-") {
    displayValue = (parseFloat(firstOperand) - parseFloat(displayValue)).toString();
  } else if (operator === "*") {
    displayValue = (parseFloat(firstOperand) * parseFloat(displayValue)).toString();
  } else if (operator === "/") {
    displayValue = (parseFloat(firstOperand) / parseFloat(displayValue)).toString();
  }
  operator = "=";
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  operator = "";
  firstOperand = "";
  updateDisplay();
}

updateDisplay()