


exports.postToDatabase = () => {

    console.log('postToDB log');
  return new Promise((resolve, reject) => {
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

exports.checkFirstname = (data) =>{

    console.log('checkFirstname log');
  const firstname = data.firstname;
  return new Promise ((resolve, reject) => {
    const regex = /^[_A-z0-9]((-|\s)[_A-z0-9])*$/g;
    if (!firstname) {
        reject('You need to write your name to continue')
    } else if (firstname.match(regex)) {
        reject('Please do not use symbols')
    } else if (firstname.length >= 100) {
        reject('Your username is too long!')
    } else {
        resolve(data)
    }
  })
}

exports.checkEmail = (data) =>{
  console.log('checkEmail log');
  const email = data.email;
  const regex = /^(([^<>()[].,;:\s@\"]+(.[^<>()[].,;:\s@\"]+)*)|(\".+\"))@(([^<>()[].,;:\s@\"]+.)+[^<>()[].,;:\s@\"]{2,})$/i ;
  return new Promise ((resolve, reject) => {
    if (!email) {
      reject('You need to write your email to continue')
    } else if (!email.match(regex)) {
      reject('Your email address is not valid');
    } else if (email.length >= 100) {
        reject('Your email is too long!')
    } else {
      resolve(data)
    }
  })
}
