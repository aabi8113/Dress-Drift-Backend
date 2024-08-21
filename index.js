const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4010;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
const dressRoutes = require('./routes/dressRoutes');
const cartRoutes = require('./routes/cartRoutes'); // <-- Add this line

// Register routes
app.use('/api/dresses', dressRoutes);
app.use('/api/cart', cartRoutes); // <-- Add this line

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
