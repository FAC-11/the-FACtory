const dbConnection = require('./../model/db_connection');

const checkFirstName = data => {
  const firstname = data.firstname;
  const email = data.email;
  const regex = /^[_A-z0-9]((-|\s)[_A-z0-9])*$/g;
  if (!firstname) {
    throw new Error('You need to write your name to continue')
  } else if (firstname.match(regex)) {
    throw new Error('Please do not use symbols')
  } else if (firstname.length >= 100) {
    throw new Error('Your username is too long!')
  }
}

const checkEmail = data => {
  const email = data.email;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) {
    throw new Error('You need to write your email to continue')
  } else if (!email.match(regex)) {
    throw new Error('Your email address is not valid');
  } else if (email.length >= 100) {
    throw new Error('Your email is too long!')
  }
}

const checkIdeaTitle = data => {
  const title = data.ideatitle;
  if (!title) {
    throw new Error('Please write a name for your idea');
  } else if (title.length >= 100) {
    throw new Error('Your idea name is too long!')
  }
}

const checkIdeaDescription = data => {
  const desc = data.ideadesc;
  if (!desc) {
    throw new Error('Please describe your idea');
  }
}

exports.postToDatabase = (postSQL, data) => {

  console.log('postToDB log');
  return new Promise((resolve, reject) => {
    checkFirstName(data);
    checkEmail(data);
    checkIdeaTitle(data);
    checkIdeaDescription(data);
    dbConnection.query(postSQL,
      (err, res) => {
        if (err) {
          reject(err, 'Error stuff:  ');
        } else {
          resolve(res, 'Response stuff:  ');
        }
      });
  })
}
