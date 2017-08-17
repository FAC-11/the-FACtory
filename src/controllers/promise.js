


exports.postToDatabase = () => {
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

exports.checkFirstname = () =>{
  const firstname = req.body.firstname;
  return new Promise ((resolve, reject) => {
    const regex = /^[_A-z0-9]((-|\s)[_A-z0-9])*$/g;
    if (!firstname.value) {
        reject('You need to write your name to continue')
    } else if (firstname.value.match(regex)) {
        reject('Please do not use symbols')
    } else if (firstname.value.length >= 100) {
        reject('Your username is too long!')
    } else {
        resolve(req.body)
    }
  })
}
