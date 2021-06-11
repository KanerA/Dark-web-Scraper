require('dotenv').config();
const express = require('express');
const { newPaste } = require('./utils');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {});

app.post('/paste', newPaste);

module.exports = app;