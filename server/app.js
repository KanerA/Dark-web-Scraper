const express = require('express');
const getPaste = require('./scraper');
const app = express();

app.get('/', getPaste);

module.exports = app;