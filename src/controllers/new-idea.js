const dbConnection = require('../model/db_connection');
const date = require('./date');

exports.get = (req, res) => {
  res.render('new-idea', {
    activePage: {
      idea: true
    }
  });
};

exports.post = (req, res, next) => {
  const data = req.body;
  const postSQL = `
    INSERT INTO users(firstname, email)
    VALUES ('${data.firstname}', '${data.email}');

    INSERT INTO ideas(userid, dateadded, ideatitle, ideadesc)
    VALUES (
      (SELECT id
        FROM users
        WHERE email='${data.email}'),
      now(), '${data.ideatitle}', '${data.ideadesc}');
    `;

  const postToDatabase = () => {
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
  postToDatabase()
    .then((stuff, text) => {
      console.log(text, stuff);
      res.redirect('/congratulations');
    })
    .catch((stuff, text) => {
      res.status(404);
      return next();
    });
};
