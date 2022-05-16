const defaultResult = 0;
let currenteResult = defaultResult;
let logEntries = [];

//Gets input from input fiel
function getUserNumberInput(){
    return parseInt(userInput.value);//userInput from vendor file
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currenteResult , calcDescription);
}

//Dynamic function to get the operation
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult ){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currenteResult
    currenteResult += enteredNumber;
    createAndWriteOutput('+', initialResult,enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currenteResult);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currenteResult
    currenteResult -= enteredNumber;
    createAndWriteOutput('-', initialResult,enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currenteResult);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currenteResult
    currenteResult /= enteredNumber;
    createAndWriteOutput('/', initialResult,enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currenteResult);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currenteResult
    currenteResult *= enteredNumber;
    createAndWriteOutput('*', initialResult,enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currenteResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
//from vendor file
