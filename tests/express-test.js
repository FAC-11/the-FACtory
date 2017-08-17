const test = require('tape');
const supertest = require('supertest');
const app = require('./../src/app');

// check if tape works
test('1 equals 1', (t) => {
  t.equals(1, 1, 'one should equal one');
  t.end();
});

// check if supetest works
test('check if supertest works', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.end();
    })
})

// check we get 404 on non-existing endpoint
test('404 when endpoint does not exist', (t) => {
  supertest(app)
    .get('/bsdjkhgablsg')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 404, 'Status code is 404');
      t.end();
    })
})

// test('check prepopulated browse database table', (t) => {
//   supertest(app)
//     .get('/browse')
//     .expect(200)
//     .expect('Content-Type', /json/)
//     .end((err, res) => {
//       let expected = "Movie recommendation app";
//       let actual = res;
//       t.equals(actual, expected, 'Should be Movie recommendation app')
//       t.end();
//     })
// })
