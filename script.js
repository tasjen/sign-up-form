const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordWarning = document.querySelector('#password + p');

password.classList.add('password-check');
confirmPassword.classList.add('password-check');


password.addEventListener('input', passwordCheck);
confirmPassword.addEventListener('input', passwordCheck);

function passwordCheck(){
  if (password.value === confirmPassword.value
    && password.value !== ''
    && confirmPassword.value !== ''){
    password.classList.remove('password-check');
    confirmPassword.classList.remove('password-check');
    passwordWarning.style.display = 'none';
  }
  else {
    password.classList.add('password-check');
    confirmPassword.classList.add('password-check');
    passwordWarning.style.display = 'block';
  }
}

