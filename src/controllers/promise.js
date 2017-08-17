const dbConnection = require('./../model/db_connection');
const validator = require('./validator');

exports.postToDatabase = (postSQL, data) => {
  console.log('postToDB log');
  return new Promise((resolve, reject) => {
    validator.checkFirstName(data);
    validator.checkEmail(data);
    validator.checkIdeaTitle(data);
    validator.checkIdeaDescription(data);
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
