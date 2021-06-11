const Paste = require('./models/Paste');

const newPaste = (req, res) => {
    const pastesArr = req.body;
    pastesArr && pastesArr.map(paste => {
        const mongoPaste = new Paste(paste);
        mongoPaste.save()
        .then( _ => {
            console.log('Success!');
        })
        .catch(err => {
            console.log('ERROR: ' + err.message);
            res.sendStatus(500);
        })
    })
};

module.exports = { newPaste };