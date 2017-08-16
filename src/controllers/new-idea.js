exports.get = (req, res) => {
  res.render('new-idea', {activePage: {idea: true}});
}

exports.post = (req, res, next) => {
  console.log("REQ.BODY: " , req.body);
}
