const User = require('../models/Users')

const users =async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

const newuser=async (req, res) => {
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
  }

module.exports = {
    users,
    newuser
}