const dbConnection = require('./../model/db_connection');

exports.get = (req, res, next) => {
  const getSql = 'SELECT users.firstname, ideas.dateadded, ideas.ideatitle, ideas.ideadesc FROM ideas INNER JOIN users ON users.id = ideas.userid';



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
    res.render('view-idea',{
      activePage:{
        viewIdea: true
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
