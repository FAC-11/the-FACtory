exports.get = (req, res) => {
  res.render('new-idea', {activePage: {idea: true}});
}
