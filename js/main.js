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
  const isAction = actions.includes(value);
  const isOperation = operations.includes(value);
  if (isAction) {
    doAction(value);
  } else {
    display.innerText += `${value}`;
    if (!isOperation) {
      numbers[currentNumber] += `${value}`;
    } else if (isOperation && !currentOperation) {
      currentOperation = value;
      currentNumber = 1;
    } else if (isOperation && currentOperation) {
      doOperation(value);
    }
  }
}

function doAction(action) {
  switch (action) {
    case 'CE':
      removeLastChar();
      break;
    case 'C':
      resetCalculator();
      break;
    case '=':
      equalClicked();
      break;
  }
}

function doOperation(opValue) {
  const newValue = doCalc();
  currentOperation = opValue;
  currentNumber = opValue ? 1 : 0;
  numbers[0] = String(newValue);
  numbers[1] = '';
  display.innerText = '';
  display.innerText += `${newValue}${opValue ? opValue : ''}`;
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

function equalClicked() {
  numbers[0] && numbers[1]
    ? doOperation(null)
    : window.alert('Não é possível gerar o resultado com os dados fornecidos!');
}

function removeLastChar() {
  const displayText = display.innerText;
  const char = displayText[displayText.length - 1];
  const isOperation = operations.includes(char);
  if (isOperation) {
    currentOperation = null;
    display.innerText = displayText.replace(char, '');
  } else {
    if (!numbers[currentNumber] && currentNumber === 1) currentNumber = 0;
    display.innerText = displayText.slice(0, displayText.length - 1);
    numbers[currentNumber] = numbers[currentNumber].slice(
      0,
      numbers[currentNumber].length - 1,
    );
  }
}

function resetCalculator() {
  display.innerText = '';
  currentOperation = null;
  currentNumber = 0;
  numbers[0] = '';
  numbers[1] = '';
}
