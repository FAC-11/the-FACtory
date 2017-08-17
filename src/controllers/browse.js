// need to require the database
const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {
  const getSql = 'SELECT userid, ideatitle FROM ideas ORDER BY dateadded DESC;';

  const showData = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(getSql,
        (err, res) => {
          if (err) {
            reject(err, 'This is an Error in getSql');
          } else {
            resolve(res, 'response to getSql');
          }
        });
    })
  }
  showData()
  .then ((stuff, text)=>{
    res.render('browse',{
      activePage:{
        browse: true
      },
      data: stuff.rows
    });
  })
  .catch((stuff, text)=>{
    res.status(500);
    return next();
  });
};
