const controls = document.querySelector('#controls');
const inputNumber = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  let size = 30;
  
  const boxes = Array.from({ length: amount }, () => {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    return box;
  });
  
  boxesContainer.append(...boxes);
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputNumber.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = '';
  }
});

destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});