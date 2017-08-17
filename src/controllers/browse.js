// need to require the database
const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {
  const getSql = 'SELECT ideatitle FROM ideas';

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
    // console.log(stuff,text);
    res.render('browse',{
      activePage:{
        browse: true
      },
      data: stuff.rows
    });
    console.log('this is out stuff: ', stuff);
    // res.rows??
  })
  .catch((stuff, text)=>{
    res.status(500);
    return next();
  });
};
