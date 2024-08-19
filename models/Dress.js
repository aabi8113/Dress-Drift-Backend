const mongoose = require('mongoose');

const DressSchema = new mongoose.Schema({
    id : {type: Number, required: true},
    name: { type: String, required: true },
    brand: { type: String },
    size: { type: String },
    occassion: { type: String },
    color: { type: String },
    saleDiscount: { type: Number },
    price: {type: Number},
    rating: { type: Number },
    imageUrl: { type: String }
});

module.exports = mongoose.model('Dress', DressSchema);
