// const checkFirstName = (data) => {
//   const firstname = data.firstname;
//   const email = data.email;
//   const regex = /^[_A-z0-9]((-|\s)[_A-z0-9])*$/g;
//   if (!firstname) {
//     let error = new Error('You need to write your name to continue');
//     cb(error);
//   } else if (firstname.match(regex)) {
//     throw new Error('Please do not use symbols')
//   } else if (firstname.length >= 100) {
//     throw new Error('Your username is too long!')
//   }
// }

const checkFirstName = (data, cb) => {
  const firstname = data.firstname;
  // if empty
  if (!firstname) {
    return cb(new Error('cant be empty'));
  } else if (firstname.match(/[^A-Z]/ig)) {
    return cb(new Error("You're name should not contain non-alphabetical characters"));
  } else if (firstname.length >= 100){
    return cb(new Error('Character limit reached'));
  } else {
    return cb({ message: ''}, data);
  }
};

const checkEmail = (data, cb) => {
  const email = data.email;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) {
    cb(new Error('cant be empty'))
  } else if (!email.match(regex)) {
    cb(new Error('Your email address is not valid'))
  } else if (email.length >= 100) {
    cb(new Error('Your email is too long!'));

  }
}

const checkIdeaTitle = data => {
  const title = data.ideatitle;
  if (!title) {
    cb(new Error('Please write a name for your idea'));
  } else if (title.length >= 100) {
    cb(new Error('Your idea name is too long!'));
  }
}

const checkIdeaDescription = data => {
  const desc = data.ideadesc;
  if (!desc) {
    cb(new Error('Please describe your idea'));
  }
}

module.exports = {
  checkFirstName: checkFirstName,
  checkEmail: checkEmail,
  checkIdeaTitle,
  checkIdeaDescription
}
