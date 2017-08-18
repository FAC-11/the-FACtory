const checkFirstName = (data, cb) => {
  const firstname = data.firstname;
  // if empty
  if (!firstname) {
    return cb(new Error('Please enter your firstname!'));
  } else if (firstname.match(/[^A-Z]/ig)) {
    return cb(new Error("You're name should not contain non-alphabetical characters!"));
  } else if (firstname.length >= 100){
    return cb(new Error("You're name should not exceed 100 characters!"));
  } else {
    return cb({ message: ''}, data);
  }
};

const checkEmail = (data, cb) => {
  const email = data.email;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) {
    return cb(new Error('Please enter your email!'))
  } else if (!email.match(regex)) {
    return cb(new Error('Please enter a valid email address!'))
  } else if (email.length >= 100) {
    return cb(new Error("You're email should not exceed 100 characters!"));
  } else {
    return cb({ message: ''}, data);
  }
}

const checkIdeaTitle = (data, cb) => {
  const title = data.ideatitle;
  if (!title) {
    return cb(new Error('Please write a name for your idea'));
  } else if (title.length >= 100) {
    return cb(new Error('Your idea name is too long!'));
  } else if (title.match(/[^A-Z\s]/ig)) {
      return cb(new Error('Title should not contain strange characters!'))
  } else {
    return cb({ message: ''}, data);
  }
}

const checkIdeaDescription = (data, cb) => {
  const desc = data.ideadesc;
  if (!desc) {
    return cb(new Error('Please describe your idea'));
  }  else if (desc.match(/[^A-Z\s]/ig)) {
        return cb(new Error('Description should not contain strange characters!'))
  } else {
    return cb({ message: ''}, data);
  }
}

module.exports = {
  checkFirstName: checkFirstName,
  checkEmail: checkEmail,
  checkIdeaTitle,
  checkIdeaDescription
}
