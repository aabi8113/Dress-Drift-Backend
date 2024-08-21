// routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Get the cart for a specific user
router.get('/:userId', cartController.getCart);

// Add an item to the cart
router.post('/add', cartController.addItemToCart);

// Remove an item from the cart
router.delete('/:userId/:dressId', cartController.removeItemFromCart);

module.exports = router;
