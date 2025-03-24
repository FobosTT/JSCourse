const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumInput() {
  return parseInt(userInput.value);
}

function resultDescription(operator, resBeforeCalc, calcNum) {
  const description = `${resBeforeCalc} ${operator} ${calcNum}`;
  outputResult(currentResult, description);
}


function writeToLog(operID, initRes, userNum, outRes) {
  const logEntry = {
    operation: operID,
    prevRes: initRes,
    number: userNum,
    result: outRes,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculator(calcType) {
  const enteredNumber = getUserNumInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calcType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calcType === "SUB") {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calcType === "MULT") {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calcType === "DIV") {
    if (enteredNumber === 0) {
      alert("pls don't divide by zero");
    }
    currentResult /= enteredNumber;
    mathOperator = '/';
  } else if (calcType === "MOD") {
    currentResult %= enteredNumber;
    mathOperator = '%';
  } else {
    alert(`Error, please check the operator ${mathOperator}`);
  }

  resultDescription(mathOperator, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculator("ADD");
}

function multiply() {
  calculator("MULT");
}
function subtract() {
  calculator("SUB");
}

function divide() {
  calculator("DIV");
}

function modulo() {
  calculator("MOD");
}


multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
subtractBtn.addEventListener("click", subtract);
addBtn.addEventListener("click", add);
moduloBtn.addEventListener("click", modulo);
