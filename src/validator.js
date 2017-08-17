//validating username is inputted
function validateUsername(username) {
  var regex = /^[_A-z0-9]((-|\s)[_A-z0-9])*$/g;
  if (!username.value) {
    //do stuff
  } else if (username.value.match(regex)) {
  //do stuff
  } else if (username.value.length >= 100) {
    //do stuff
  } else {
    //do stuff
  }
}

//  Validating email
function validateEmail(email) {
  valid = false;
  if (!email.value) {
    //do stuff
  } else if (!email.value.includes('@tinfoild.com')) {
    //do stuff
  } else if (email.value.length >= 100) {
    //do stuff
  } else {
    //do stuff
  }
}

// validating password in put
function validatePassword(password) {
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[\W]).{8,}$/;
  if (!password.value) {
    valid = false;
    var noPassword = document.createTextNode("Please enter your password")
    return passwordError.appendChild(noPassword);
  } else if (password.value.length < 12) {
    valid = false;
    var shortPassword = document.createTextNode("Your password is too short")
    return passwordError.appendChild(shortPassword);
  } else if (password.value.length >= 100) {
    var longPassword = document.createTextNode("Your password is too long!");
    return usernameError.appendChild(longPassword);
  } else {
    valid = true;
  }
}
