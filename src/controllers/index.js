const express = require('express');
const path = require('path');
const router = express.Router();

//our endpoints

const browse = require('./browse');
const congratulations = require('./congratulations');
const error = require('./error');
const home = require('./home');
const idea = require('./idea');
const newIdea = require('./new-idea');

//our home route

router.get('/', home.get);
router.get('/browse', browse.get);
router.get('/congratulations', congratulations.get);
router.get('/idea', idea.get);
router.get('/new-idea', home.get);
router.use(error.client);
route.use(error.server);

module.exports = router;
