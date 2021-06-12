const Paste = require('../models/Paste');

const checkDuplicates = async (req, res, next) => {
    const { body } = req;
    const latestPaste = await Paste.findOne({}).sort('-date').limit(1).exec();
    if(!latestPaste) return next();
    const filteredBody = body.filter(elem => {
        const pasteDate = new Date(elem.date);
        return pasteDate > latestPaste.date;
    });
    console.log(filteredBody);
    req.body = filteredBody;
    next();
};

module.exports = checkDuplicates;