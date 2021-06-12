const mongoose = require('mongoose');

const pasteSchema = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: [String],
    date: {type: Date, default: new Date, index: true}
});

module.exports = mongoose.model('Paste', pasteSchema);