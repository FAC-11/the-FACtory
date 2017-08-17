// may need to import database info??
// const viewIdea = require(./../model/db_connection);

exports.get = (req, res) => {
  res.render('view-idea', {activePage: {viewIdea: true}});
}

exports.post = (req, res) => {
  // Add post stuff
};
