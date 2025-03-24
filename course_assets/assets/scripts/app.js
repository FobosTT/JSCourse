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

function add() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  currentResult += enteredNum;
  resultDescription("+", initialRes, enteredNum);
  writeToLog("add", initialRes, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  currentResult *= enteredNum;
  resultDescription("*", initialRes, enteredNum);
  writeToLog("mult", initialRes, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  if (enteredNum == 0) {
    alert("pls don't divide by zero");
  } else {
    currentResult /= enteredNum;
    resultDescription("/", initialRes, enteredNum);
    writeToLog("division", initialRes, enteredNum, currentResult);
  }
}

function modulo() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  currentResult %= enteredNum;
  resultDescription("%", initialRes, enteredNum);
  writeToLog("modulo", initialRes, enteredNum, currentResult);
}

function sqrt() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  currentResult = initialRes * initialRes;
  resultDescription("^2", initialRes, enteredNum);
  writeToLog("sqrt", initialRes, enteredNum, currentResult);
}

multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
subtractBtn.addEventListener("click", subtract);
addBtn.addEventListener("click", add);
moduloBtn.addEventListener("click", modulo);
