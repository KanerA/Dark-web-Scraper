require('dotenv').config();
const express = require('express');
const app = express();
const Paste = require('./models/Paste');

app.use(express.json());

app.get('/', (req, res) => {
    Paste.find({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err.message)
        res.sendStatus(500)
    })
});

module.exports = app;