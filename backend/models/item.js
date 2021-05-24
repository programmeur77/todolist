const mongoose = require('mongoose');

const itemScheme = mongoose.Schema({
    description: {type: String, required: true}
});

module.exports = mongoose.model('Item', itemScheme);