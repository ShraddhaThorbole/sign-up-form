  var passwordField = document.getElementById("password");
  var confirmPasswordField = document.getElementById("confirm-password");

  function validatePassword() {
    if (passwordField.value != confirmPasswordField.value) {
      confirmPasswordField.setCustomValidity("Passwords do not match");
    } else {
      confirmPasswordField.setCustomValidity("");
    }
  }

  passwordField.addEventListener("input", validatePassword);
  confirmPasswordField.addEventListener("input", validatePassword);
