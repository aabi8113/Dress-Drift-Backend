const express = require('express');
const router = express.Router();
const Dress = require('../models/Dress');
const User = require('../models/Users')

// Get all dresses
router.get('/all', async (req, res) => {
  try {
    const dresses = await Dress.find();
    res.json(dresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new dress
router.post('/new', async (req, res) => {
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
router.get('/find/:id', async (req, res) => {
  try {
    const dress = await Dress.findById(req.params.id);
    if (!dress) return res.status(404).json({ message: 'Dress not found' });
    res.json(dress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a dress
router.put('/update/:id', async (req, res) => {
  try {
    const dress = await Dress.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dress) return res.status(404).json({ message: 'Dress not found' });
    res.json(dress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a dress
router.delete('/delete/:id', async (req, res) => {
  try {
    const dress = await Dress.findByIdAndDelete(req.params.id);
    if (!dress) return res.status(404).json({ message: 'Dress not found' });
    res.json({ message: 'Dress deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/newuser', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
