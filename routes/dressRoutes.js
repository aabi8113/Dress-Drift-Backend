const express = require('express');
const router = express.Router();
const Dress = require('../models/Dress');

// Get all dresses
router.get('/', async (req, res) => {
  try {
    const dresses = await Dress.find();
    res.json(dresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new dress
router.post('/', async (req, res) => {
  const dress = new Dress({
    id: req.body.id,
    name: req.body.name,
    brand: req.body.brand,
    size: req.body.size,
    occassion: req.body.occassion,
    color: req.body.color,
    saleDiscount: req.body.saleDiscount,
    price: req.body.price,
    rating: req.body.rating,
    imageUrl: req.body.imageUrl
  });
  try {
    const newDress = await dress.save();
    res.status(201).json(newDress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a single dress by id
router.get('/:id', async (req, res) => {
  try {
    const dress = await Dress.findById(req.params.id);
    if (!dress) return res.status(404).json({ message: 'Dress not found' });
    res.json(dress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a dress
router.put('/:id', async (req, res) => {
  try {
    const dress = await Dress.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dress) return res.status(404).json({ message: 'Dress not found' });
    res.json(dress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a dress
router.delete('/:id', async (req, res) => {
  try {
    const dress = await Dress.findByIdAndDelete(req.params.id);
    if (!dress) return res.status(404).json({ message: 'Dress not found' });
    res.json({ message: 'Dress deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
