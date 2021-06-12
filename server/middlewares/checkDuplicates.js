const Paste = require('../models/Paste');

const checkDuplicates = async (req, res, next) => {
    const { body } = req;
    const fromDb = await Paste.find({});
    if(fromDb.length === 0) return next();
    const myArrayFiltered = fromDb.filter((el) => {
        return body.some((f) => {
          return f.date === el.date && f.title === el.title;
        });
      });
      console.log(myArrayFiltered);
      req.body = myArrayFiltered;
    next();
};

module.exports = checkDuplicates;