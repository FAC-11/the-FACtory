const test = require('tape');
const validator = require('../src/controllers/validator');

test('checkFirstName', (t) => {
  // should not be empty
  var expected = "Please enter your firstname!";
  validator.checkFirstName('', (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'Should give error if empty');
  });
  // not give error on valid input
  var expected = '';
  validator.checkFirstName({ firstname: 'jack' }, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'Should not give error on valid input');
  });
  // should give error for numbers
  var expected = "You're name should not contain non-alphabetical characters!";
  validator.checkFirstName({ firstname: 'jack1' }, (err, res) => {
    var actual = err.message;
    t.equals(actual, expected, 'Should give error for numbers');
  });
    // should give error for spaces
  var expected = "You're name should not contain non-alphabetical characters!";
  validator.checkFirstName({ firstname: 'jack ' }, (err, res) => {
    var actual = err.message;
    t.equals(actual, expected, 'Should give error for spaces');
  });
  // should give error for special characters
  var expected = "You're name should not contain non-alphabetical characters!";
  validator.checkFirstName({ firstname: 'jack!@£$%^&*()' }, (err, res) => {
    var actual = err.message;
    t.equals(actual, expected, 'Should give error for special characters');
  });
  // should give error if more than 100 characters
  var expected = "You're name should not exceed 100 characters!";
  validator.checkFirstName({ firstname : 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopq' }, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'Should give error if more than 100 characters!');
    t.end();
  });
});

test('checkEmail', (t) => {
  var expected = 'Please enter your email!';
  validator.checkEmail('', (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'Should give error if empty');
  });
  var expected = '';
  validator.checkEmail({ email: 'someone@someone.com'}, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'Should not give an error if email is valid');
  });
  var expected = 'Please enter a valid email address!';
  validator.checkEmail({ email: 'te@st@test.com'}, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'should give error if more than one ampersand symbol is used');
  });
  var expected = 'Please enter a valid email address!';
  validator.checkEmail({ email: 't est@test.com'}, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'should give error if contains spaces');
  });
  var expected = 'Please enter a valid email address!';
  validator.checkEmail({ email: 't!est@test.com'}, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'should give error if contains special characters');
    t.end();
  });
})

test('checkIdeaTitle', (t) => {
  var expected = 'Title should not contain strange characters!';
  validator.checkIdeaTitle({ ideatitle: "select *"}, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'should give error if contains special characters')
  })
  var expected = '';
  validator.checkIdeaTitle({ ideatitle: "search engine will rival google"}, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'should give no error if ideatitle is valid')
    t.end();
  })
})

test('checkIdeaDescription', (t) => {
  var expected = 'Description should not contain strange characters!';
  validator.checkIdeaDescription({ ideadesc: ";"}, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'should give error if contains special characters')
  })
  var expected = '';
  validator.checkIdeaDescription({ ideadesc: "best app in the world"}, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'should give no error if description is valid')
    t.end();
  })
})
