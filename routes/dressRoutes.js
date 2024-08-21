const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const dressController = require('../controllers/dressController')

// Get all dresses
router.get('/all', dressController.all);

// Add a new dress
router.post('/new', dressController.neww);

// Get a single dress by id
router.get('/find/:id', dressController.findById);

// Update a dress
router.put('/update/:id',
dressController.updateById);

// Delete a dress
router.delete('/delete/:id', dressController.deleteById);

//All users List
router.get('/users', userController.users);

//New user
router.post('/newuser', userController.newuser);

module.exports = router;
