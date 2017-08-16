exports.get = (req, res) => {
  res.render('new-idea', {activePage: {idea: true}});
}

exports.post = (req, res, next) => {
  console.log("REQ.BODY: " , req.body);
    const postIdeaQuery = `INSERT INTO users VALUES (${req.name}, ${req.email});
    INSERT INTO ideas VALUES((SELECT id FROM users WHERE email=${req.email}),
    ${req.dateadded}, ${req.ideatitle}, ${req.ideadesc});`;
}
