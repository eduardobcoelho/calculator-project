const display = document.getElementById('display');
const buttons = document.getElementsByTagName('button');
const operations = ['+', '-', 'x', '/'];
const actions = ['CE', 'C', '='];
const numbers = {
  0: '',
  1: '',
};
let currentOperation = null;
let currentNumber = 0;

addButtonsClickListener();

function addButtonsClickListener() {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', displayNumber);
  }
}

function displayNumber({ target }) {
  const value = target.value;
  const isOperation = operations.includes(value);
  const isAction = actions.includes(value);
  if (isAction) {
    doAction(value);
  } else {
    display.innerText += `${value}`;
    if (!isOperation) {
      numbers[currentNumber] += `${value}`;
    } else if (isOperation && !currentOperation) {
      currentOperation = value;
      currentNumber++;
    } else if (isOperation && currentOperation) {
      doOperation(value);
    }
  }
}

function doOperation(opValue) {
  const newValue = doCalc();
  currentOperation = opValue;
  currentNumber = 1;
  numbers[0] = String(newValue);
  numbers[1] = '';
  display.innerText = '';
  display.innerText += `${newValue}${currentOperation}`;
}

function doCalc() {
  let newValue = null;
  switch (currentOperation) {
    case '+':
      newValue = Number(numbers[0]) + Number(numbers[1]);
      break;
    case '-':
      newValue = Number(numbers[0]) - Number(numbers[1]);
      break;
    case 'x':
      newValue = Number(numbers[0]) * Number(numbers[1]);
      break;
    case '/':
      newValue = Number(numbers[0]) / Number(numbers[1]);
      break;
  }
  return newValue;
}

function doAction(action) {
  switch (action) {
    case 'CE':
      // removeLastChar();
      break;
    case 'C':
      resetCalculator();
      break;
    case '=':
      break;
  }
}

function removeLastChar() {
  const displayText = display.innerText;
  const char = displayText[displayText.length - 1];
  const isOperation = operations.includes(char);
  if (isOperation) {
    currentOperation = null;
    display.innerText = displayText.replace(char, '');
  } else {
    display.innerText = displayText.slice(0, displayText.length - 1);
    numbers[currentNumber] = numbers[currentNumber].slice(
      0,
      numbers[currentNumber].length - 1,
    );
  }
  console.log('numbers: ', numbers);
}

function resetCalculator() {
  numbers[0] = '';
  numbers[1] = '';
  currentOperation = null;
  currentNumber = 0;
  display.innerText = '';
}
