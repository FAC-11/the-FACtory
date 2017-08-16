const dbConnection = require('../model/db_connection');
const date = require('./date');

exports.get = (req, res) => {
  res.render('new-idea', {
    activePage: {
      idea: true
    }
  });
};

exports.post = (req, res) => {
  const postIdeaQuery = `INSERT INTO users VALUES ('${req.body.firstname}', '${req.body.email}'); INSERT INTO ideas VALUES ((SELECT id FROM users WHERE email='${req.body.email}'), '${date.format()}', '${req.body.ideatitle}', '${req.body.ideadesc})';`;

  dbConnection.query(postIdeaQuery,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
};
