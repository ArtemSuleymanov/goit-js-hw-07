const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const trimSpaces = (str) => {
    while (str.startsWith(' ')) {
      str = str.substring(1);
    }
    while (str.endsWith(' ')) {
      str = str.substring(0, str.length - 1);
    }
    return str;
  };

  const email = trimSpaces(loginForm.elements.email.value);
  const password = trimSpaces(loginForm.elements.password.value);

  if (!email || !password) {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    loginForm.reset();
  }
});
