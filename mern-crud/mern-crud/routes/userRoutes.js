const express = require('express');
const router = express.Router();
const User = require('../models/User');

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const { name, email, age, role } = req.body;
    const user = new User({ name, email, age, role });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ users with filter, projection, sorting, pagination
router.get('/filter', async (req, res) => {
  try {
    const { minAge, role, fields, sortBy, limit, skip } = req.query;

    // Build query object
    const query = {};
    if (minAge) query.age = { $gt: parseInt(minAge) };
    if (role) query.role = role;

    // Build projection object
    let projection = {};
    if (fields) {
      fields.split(',').forEach(field => {
        projection[field] = 1;
      });
    }

    // Sorting object
    let sort = {};
    if (sortBy) {
      const [field, order] = sortBy.split(':'); // e.g. age:desc
      sort[field] = order === 'desc' ? -1 : 1;
    }

    // Pagination options
    const lim = limit ? parseInt(limit) : 0;
    const skp = skip ? parseInt(skip) : 0;

    const users = await User.find(query, projection)
      .sort(sort)
      .limit(lim)
      .skip(skp);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE one user by id
router.put('/:id', async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE multiple users - increase age by 1 for all users matching condition
router.put('/', async (req, res) => {
  try {
    const { condition, update } = req.body;
    const result = await User.updateMany(condition, update);
    res.json({ modifiedCount: result.modifiedCount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE one user by id
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE multiple users by condition
router.delete('/', async (req, res) => {
  try {
    const { condition } = req.body;
    const result = await User.deleteMany(condition);
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DROP collection (use with caution)
router.delete('/drop/collection', async (req, res) => {
  try {
    await User.collection.drop();
    res.json({ message: 'User collection dropped' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
