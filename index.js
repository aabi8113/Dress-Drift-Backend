const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4009;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const dressRoutes = require('./routes/dressRoutes');
app.use('/api/dresses', dressRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
