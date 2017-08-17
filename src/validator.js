//validating username is inputted
const validateFirstname = (firstname) => {
  return new Promise ((resolve, reject) => {
    const regex = /^[_A-z0-9]((-|\s)[_A-z0-9])*$/g;
    if (!firstname.value) {
        reject('You need to write your name to continue')
    } else if (firstname.value.match(regex)) {
        reject('Please do not use symbols')
    } else if (firstname.value.length >= 100) {
        reject('Your username is too long!')
    } else {
        resolve()
    }
  }


//  Validating email
// function validateEmail(email) {
//   valid = false;
//   if (!email.value) {
//     //do stuff
//   } else if (!email.value.includes()) {
//     //do stuff
//   } else if (email.value.length >= 100) {
//     //do stuff
//   } else {
//     //do stuff
//   }
// }
//
//   function validateIdeatitle(ideaTitle) {
//   valid = false;
//   if (!email.value) {
//     //do stuff
//   } else if (!email.value.includes('@tinfoild.com')) {
//     //do stuff
//   } else if (email.value.length >= 100) {
//     //do stuff
//   } else {
//     //do stuff
//   }
// }
//
// function validateIdeadesc(ideaDesc) {
//   valid = false;
//   if (!email.value) {
//     //do stuff
//   } else if (!email.value.includes('@tinfoild.com')) {
//     //do stuff
//   } else if (email.value.length >= 100) {
//     //do stuff
//   } else {
//     //do stuff
//   }
// }

// validating password in put

module.exports = {
  validateFirstname,
  validateEmail,
  validateIdeatitle,
  validateIdeadesc
}
