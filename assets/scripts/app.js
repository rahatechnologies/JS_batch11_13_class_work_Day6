let calculationDescription = '';
// let defaultResult = 0;
let currentResult = 0;
let logEntries = [];

// 10 => "10"  method => toString()
// "10" => 10  method => parseInt()
// "10.6" => 10.6  method => parseFloat()

function getUserNumberFromInput() {
  return parseFloat(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calculationDescription);
}
function add() {
  // individual responsibility
  // common part should be grouped together and invoked on demand

  const enteredNumber = getUserNumberFromInput(); //3

  const initialResult = currentResult;
  currentResult += enteredNumber;

  createAndWriteOutput('+', initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  // console.log('logEntries: ' + logEntries); // [3]
  console.log(logEntries); // [3]
  console.log(logEntries[0].operation);
}

function subtract() {
  const enteredNumber = getUserNumberFromInput(); // 5

  const initialResult = currentResult;

  currentResult -= enteredNumber;

  createAndWriteOutput('-', initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function multiply() {
  const enteredNumber = getUserNumberFromInput();

  const initialResult = currentResult;
  currentResult *= enteredNumber;

  createAndWriteOutput('*', initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}
function divide() {
  const enteredNumber = getUserNumberFromInput();

  const initialResult = currentResult;
  currentResult /= enteredNumber;

  createAndWriteOutput('/', initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
