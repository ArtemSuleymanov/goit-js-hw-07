const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, () => {
    let name = nameInput.value;

    while (name.startsWith(' ')) {
        name = name.substring(1);
      }

      while (name.endsWith(' ')) {
        name = name.substring(0, name.length - 1);
      }

      nameOutput.textContent = name ? name : 'Anonymous';
});