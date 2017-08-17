const tape = require('tape');
const shot = require('shot');
const fs = require('fs');
const path = require('path');
const buildDataBase = require('../src/model/db_build');
const dbConnection = require('../src/model/db_connection');
const app = require('../src/app');

// Select all firstnames from users
tape("Select all firstnames from users", t => {
  buildDataBase();
  const expected = [
    { firstname: 'Abdullah'},
    { firstname: 'Max'},
    { firstname: 'Jen'},
    { firstname: 'Rebeca'}
  ];

  dbConnection.query('SELECT firstname FROM users;', (err, res) => {
    if (err) {
      t.error(err, 'This is an error');
    } else {
      const actual = res.rows;
      t.deepEquals(actual, expected, 'db query should get firstnames');
      t.end();
    }
  })
})

// test ideas database
tape("get idea titles from ideas database", t => {
  buildDataBase();
  const expected = [
    { ideatitle: 'Movie recommendation app' },
    { ideatitle: 'travel giffy app' },
    { ideatitle: 'holiday inspiration app' },
    { ideatitle: 'mario cv app' }
  ];

  dbConnection.query('SELECT ideatitle FROM ideas;', (err, res) => {
    if (err) {
      t.error(err, 'This is an error');
    } else {
      const actual = res.rows;
      t.deepEquals(actual, expected, 'db query should get titles');
      t.end();
    }
  })
})

tape("check if post adds a new user to user table", t => {
  buildDataBase();
  const insertUserSql = "INSERT INTO users (firstname, email) VALUES ($1, $2)";
  const expected = [
      { firstname: 'Amelie', email: 'amelie@amelie.com'}
  ];

  dbConnection.query(insertUserSql, [expected[0].firstname, expected[0].email], (err, res) => {
    if (err) {
      t.error(err, 'This is an error');
    } else {
      dbConnection.query("SELECT firstname, email FROM users WHERE firstname='Amelie';",
      (err, res) => {
        if (err) {
          t.error('This is an error');
        } else {
          const actual = res.rows;
          t.deepEquals(actual, expected, 'firstname should be Amelie');
          t.end();
        }
      })
    }
  })
})




// inserting a new idea
// tape("check if a post adds a new idea to ideatable", t => {
//   buildDataBase();
//   const insertNewIdeaSql = "INSERT INTO ideas (userid, dataadded, ideatitle, ideadesc) VALUES ($1, $2, $3, $4)";
//   const expected = [
//       { userid: 5, dataadded: 2017-08-17, }
//   ];
//
//   dbConnection.query('SELECT ideatitle FROM ideas;', (err, res) => {
//     if (err) {
//       t.error(err, 'This is an error');
//     } else {
//       const actual = res.rows;
//       t.deepEquals(actual, expected, 'db query should get titles');
//       t.end();
//     }
//   })
// })
