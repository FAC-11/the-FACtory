const test = require('tape');
const validator = require('../src/controllers/validator');

test('checkFirstName', (t) => {
  // should not be empty
  var expected = 'cant be empty';
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
  var expected = "You're name should not contain non-alphabetical characters";
  validator.checkFirstName({ firstname: 'jack1' }, (err, res) => {
    var actual = err.message;
    t.equals(actual, expected, 'Should give error for numbers');
  });
    // should give error for spaces
  var expected = "You're name should not contain non-alphabetical characters";
  validator.checkFirstName({ firstname: 'jack ' }, (err, res) => {
    var actual = err.message;
    t.equals(actual, expected, 'Should give error for spaces');
  });
  // should give error for special characters
  var expected = "You're name should not contain non-alphabetical characters";
  validator.checkFirstName({ firstname: 'jack!@£$%^&*()' }, (err, res) => {
    var actual = err.message;
    t.equals(actual, expected, 'Should give error for special characters');
  });
  // should give error if more than 100 characters
  var expected = "Character limit reached";
  validator.checkFirstName({ firstname : 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopq' }, (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'Should give error if more than 100 characters');
    t.end();
  });
});

test('checkEmail', (t) => {
  var expected = 'cant be empty';
  validator.checkEmail('', (err, res) => {
    let actual = err.message;
    t.equals(actual, expected, 'Should give error if empty');
    t.end();
  });
})
