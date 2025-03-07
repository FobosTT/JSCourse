const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumInput(){
  return parseInt(userInput.value)
}

function resultDescription(operator, resBeforeCalc, calcNum){
  const description = `${resBeforeCalc} ${operator} ${calcNum}`;
  outputResult(currentResult, description);
}


function add() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  currentResult += enteredNum;
  resultDescription('+', initialRes, enteredNum);
}


function multiply() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  currentResult *= enteredNum;
  resultDescription('*', initialRes, enteredNum);
}


function divide() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
    if(enteredNum == 0){
      alert("pls don't divide by zero");
      } 
    else {
    currentResult /= enteredNum;
    resultDescription('/', initialRes, enteredNum);
    }
}


function subtract() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  currentResult -= enteredNum;
  resultDescription('-', initialRes, enteredNum);
}

function modulo() {
  const enteredNum = getUserNumInput();
  const initialRes = currentResult;
  currentResult %= enteredNum;
  resultDescription('%', initialRes, enteredNum);
}

multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
subtractBtn.addEventListener("click", subtract);
addBtn.addEventListener("click", add);
moduloBtn.addEventListener("click", modulo);

