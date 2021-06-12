require('dotenv').config();
const express = require('express');
const checkDuplicates = require('./middlewares/checkDuplicates');
const { newPaste } = require('./utils');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {});

module.exports = app;