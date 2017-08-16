exports.get = (req, res) => {
  res.render('idea', {activePage: {idea: true}});
}
