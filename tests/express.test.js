const test = require('tape');
const supertest = require('supertest');
const app = require('./../src/app');
const endpoints = require('./endpoints');

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

// looping through endpoints to check statusCode 200
for(let i=0; i<endpoints.length; i++){
  test(`check if status code of ${endpoints[i]} is 200`, (t) => {
    supertest(app)
      .get(endpoints[i])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        t.same(res.statusCode, 200, `Status code of ${endpoints[i]} is 200`);
        t.end();
      })
  })
}

