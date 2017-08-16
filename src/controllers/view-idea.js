// may need to import database info??
// const viewIdea = require(./../model/db_connection);

exports.get = (req, res) => {
  res.render('viewIdea', {activePage: {viewIdea: true}});
}
