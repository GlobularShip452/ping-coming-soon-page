function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    document.form1.email.focus();
    return true;
  } else {
    let input = document.querySelector('.email');

    input.setAttribute('id', 'wrong');

    document.form1.email.focus();
    return false;
  }
}
