const mongoose = require('mongoose');

const UsersShema = new mongoose.Schema({
    uid : {type: Number, required: true},
    username: { type: String, required: true },
    password: { type: String },
    size: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('User', UsersSchema);
