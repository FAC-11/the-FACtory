const dbConnection = require('../model/db_connection');
const date = require('./date');
const promises = require('./promise');

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

  promises.checkFirstname(data)
    .then((data) => {
      console.log('firstname data: ', data);
    return promises.checkEmail(data);
    })
    .then((data) => {
      return promises.postToDatabase(data);
    })
    .then((data) => {
      console.log('This b an error: ', data);
      res.redirect('/congratulations');
    })
    .catch((data) => {
      res.status(404);
      return next(stuff);
    });
};
