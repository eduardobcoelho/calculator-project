const display = document.getElementById('display');
const btnNumbersConjuntsValue = {
  0: [1, 2, 3],
  1: [4, 5, 6],
  2: [7, 8, 9],
  3: [0, '.'],
};
const btnOpsConjuntsValue = {
  0: ['sum', 'subtraction', 'multiplication', 'division'],
  1: ['CE', 'C', '='],
};

renderBtnNumbersConjunts();
renderBtnOpsConjunts();

function renderBtnNumbersConjunts() {
  const containerNumbers = document.getElementById('container-numbers');
  const conjunts = getConjunts('btn-numbers-conjunt', 4);
  conjunts.forEach((conjunt) => {
    containerNumbers.appendChild(conjunt);
  });
}

function renderBtnOpsConjunts() {
  const containerOps = document.getElementById('container-ops');
  const conjunts = getConjunts('btn-op-conjunt', 2);
  conjunts.forEach((conjunt) => {
    containerOps.appendChild(conjunt);
  });
}

function getConjunts(classType, quantity) {
  const conjunts = createConjunts(classType, quantity);
  conjunts.forEach((conjunt, i) => {
    const conjuntValue =
      classType === 'btn-numbers-conjunt'
        ? btnNumbersConjuntsValue[i]
        : btnOpsConjuntsValue[i];
    conjuntValue.map((value) => {
      const button = createBtn(
        classType === 'btn-numbers-conjunt' ? 'btn-number' : 'btn-op',
        value,
      );
      conjunt.appendChild(button);
    });
  });
  return conjunts;
}

function createConjunts(classType, quantity) {
  let conjunts = [];
  for (let i = 0; i < quantity; i++) {
    const div = document.createElement('div');
    div.classList.add(classType);
    conjunts.push(div);
  }
  return conjunts;
}

function createBtn(classType, value) {
  const button = document.createElement('button');
  button.classList.add(classType, 'btn-style');
  const btnValue = getValueByExceptions(value);
  button.value = btnValue;
  button.textContent = btnValue;
  button.style = getStyleByExceptions(value);
  return button;
}

function getValueByExceptions(value) {
  const exceptions = {
    sum: '+',
    subtraction: '-',
    multiplication: 'x',
    division: '/',
  };
  return exceptions[value] || value;
}

function getStyleByExceptions(value) {
  const exceptions = {
    '0': 'width: 65%',
    '.': 'width: 30%',
    'CE': 'background-color: #5007ed; flex-basis: 20%',
    'C': 'background-color: #5007ed; flex-basis: 20%',
    '=': 'background-color: #e63819; flex-basis: 45%',
  };
  return exceptions[value] || '';
}
