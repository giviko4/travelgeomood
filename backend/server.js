// /backend/server.js
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// --- მონაცემთა ბაზის იმიტაცია ---
let users = [];
let userIdCounter = 1;

const destinations = [
  { id: 1, name: 'Paris', price: 1200, image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2564&auto=format&fit=crop' },
  { id: 2, name: 'Bali', price: 3000, image: 'https://images.unsplash.com/photo-1537996194471-e657df97525e?q=80&w=2574&auto=format&fit=crop' },
  { id: 3, name: 'Santorini', price: 1500, image: 'https://images.unsplash.com/photo-1563789031959-4c0228135327?q=80&w=2574&auto=format&fit=crop' },
  { id: 4, name: 'Arizona', price: 800, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dbaa3?q=80&w=2670&auto=format&fit=crop' },
];

// --- API Endpoints ---
app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

// რეგისტრაცია
app.post('/api/auth/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return res.status(409).json({ message: "User with this email already exists." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id: userIdCounter++, name, email, password: hashedPassword };
        users.push(newUser);
        console.log("New user registered:", { id: newUser.id, name: newUser.name, email: newUser.email });
        res.status(201).json({
            message: "User registered successfully!",
            user: { id: newUser.id, name: newUser.name, email: newUser.email }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
});

// ავტორიზაცია
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials." });
        }
        console.log(`User ${user.email} logged in.`);
        res.status(200).json({
            message: "Login successful!",
            user: { id: user.id, name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});``