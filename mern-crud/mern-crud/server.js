const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Seed initial sample data (optional)
app.get('/api/seed', async (req, res) => {
  const User = require('./models/User');
  try {
    const users = [
      { name: "John Doe", email: "john@example.com", age: 30, role: "admin" },
      { name: "Jane Smith", email: "jane@example.com", age: 28, role: "user" },
      { name: "Mike Johnson", email: "mike@example.com", age: 45, role: "user" },
      { name: "Emily Davis", email: "emily@example.com", age: 35, role: "admin" }
    ];
    await User.deleteMany({});
    await User.insertMany(users);
    res.json({ message: "Sample data seeded" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
