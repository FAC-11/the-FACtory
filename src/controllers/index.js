const express = require('express');
const path = require('path');
const router = express.Router();

//our endpoints

const browse = require('./browse');
const congratulations = require('./congratulations');
const error = require('./error');
const home = require('./home');
const viewIdea = require('./view-idea');
const newIdea = require('./new-idea');

//our home route

router.get('/', home.get);
router.get('/browse', browse.get);
router.get('/congratulations', congratulations.get);
router.get('/view-idea', viewIdea.get);
router.get('/new-idea', newIdea.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
