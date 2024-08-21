// models/Cart.js

const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    dressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dress', required: true },
    quantity: { type: Number, required: true }
});

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [CartItemSchema]
});

module.exports = mongoose.model('Cart', CartSchema);
