function printName() {
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  if (emailInput && passwordInput) {
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
  } else {
    console.error("Input elements not found");
  }
}
