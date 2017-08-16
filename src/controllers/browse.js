// need to require the database
// const browse = require(./../model/db_connection);

exports.get = (req, res) => {
  res.render('browse', {activePage: {browse: true}});
}
