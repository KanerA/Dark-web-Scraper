const Paste = require('./models/Paste');

const getPastes = async (req, res) => {
    Paste.find({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log('There was an Error: ' + err.message);
        res.sendStatus(500);
    });
};

module.exports = { getPastes };