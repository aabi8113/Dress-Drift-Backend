const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String,required: true }
});

module.exports = mongoose.model('User', UsersSchema);
