const buttons = document.getElementsByTagName('button');

addButtonsClickListener();

function addButtonsClickListener() {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', () => {
      console.log('clicou no botão: ', button.value);
    });
  }
}
