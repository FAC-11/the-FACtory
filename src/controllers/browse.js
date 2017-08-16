exports.get = (req, res) => {
  res.render('home', {activaPage: {home: true}});
}
