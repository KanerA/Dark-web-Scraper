require('dotenv').config();
const express = require('express');
const app = express();
const Paste = require('./models/Paste');
const paste = require('./routes/paste');

app.use(express.json());
app.use('/paste', paste)

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