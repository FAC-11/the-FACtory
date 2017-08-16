BEGIN;

DROP TABLE IF EXISTS users, ideas, comments CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

INSERT INTO users(firstname, email) VALUES
('Abdullah', 'someone@someone.com'),
('Max', 'mrmax@max.com'),
('Jen', 'jen@jen.com'),
('Rebeca', 'rebeca@rebeca.com');

 CREATE TABLE ideas (
   id SERIAL PRIMARY KEY,
   userid int4 REFERENCES users(id),
   dateadded timestamp NOT NULL,
   ideatitle VARCHAR(100) NOT NULL,
   ideadesc TEXT NOT NULL
 );

 INSERT INTO ideas(userid, dateadded, ideatitle, ideadesc) VALUES
  ('1','2017-08-09 12:45:34.243', 'Movie recommendation app', 'app where users can search for movies for any genre from moviesdb api'),
  ('2','2017-08-09 12:45:34.243', 'travel giffy app', 'shows status of underground stations using a gif from giffy website'),
  ('3','2017-08-09 12:45:34.243', 'holiday inspiration app', 'shows photos of different holiday destinations to inspire travellers'),
  ('4','2017-08-09 12:45:34.243', 'mario cv app', 'shows cv in an interactive way like a game');

  CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    ideaid int4 REFERENCES ideas(id),
    comment TEXT NOT NULL,
    name VARCHAR(100) NOT NULL
  );

  INSERT INTO comments(ideaid, comment, name) VALUES
  ('2', 'Stupid idea! Why would you do that?!', 'grumpyBastard'),
  ('1', 'Best idea since sliced bread. And I dont even eat sliced bread', 'neverHeardOfIMDB'),
  ('4', 'You guys stole my idea!!!', 'Robby Leonardi'),
  ('3', 'This sounds like instagram', 'Abdullah');
 COMMIT;
