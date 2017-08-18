const dbConnection = require('./../model/db_connection');
const validator = require('./validator');

exports.postToDatabase = (postSQL, data) => {
  return new Promise((resolve, reject) => {
    validator.checkFirstName(data, (err, res) => {
      if (err.message) throw new Error(err.message);
    });
    validator.checkEmail(data, (err, res) => {
      if (err.message) throw new Error(err.message);
    });
    validator.checkIdeaTitle(data, (err, res) => {
      if (err.message) throw new Error(err.message);
    });
    validator.checkIdeaDescription(data, (err, res) => {
      if (err.message) throw new Error(err.message);
    });
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
