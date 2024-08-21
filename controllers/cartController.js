// controllers/cartController.js

const Cart = require('../models/Cart');
const Dress = require('../models/Dress');

// Get cart by user ID
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.dressId');
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add item to cart
const addItemToCart = async (req, res) => {
    const { userId, dressId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const existingItem = cart.items.find(item => item.dressId.toString() === dressId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ dressId, quantity });
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Remove item from cart
const removeItemFromCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        cart.items = cart.items.filter(item => item.dressId.toString() !== req.params.dressId);
        await cart.save();

        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getCart,
    addItemToCart,
    removeItemFromCart
};
