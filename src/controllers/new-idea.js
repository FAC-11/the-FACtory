const date = require('./date');
const promise = require('./promise');

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


promise.postToDatabase(postSQL, data)
    .then((data) => {
      res.redirect('/congratulations');
    })
    .catch((err) => {
      res.status(422).render('error', {
        layout: 'error',
        statusCode: 422,
        errorMessage: err.message
      });
    });
};
