const express = require('express');
const app = express();
const connectDB = require('./database/database');
const User = require('./modal/schema');
const validateUser = require('./utils/validateUser');
const bcrypt = require('bcrypt');
app.use(express.json());

(async () => {
    try {
        await connectDB();
        console.log("Database connected successfully");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (err) {
        console.log("Database connection failed", err);
    }
})();

app.post('/register', async (req, res) => {
    try {
        const isValid = await validateUser(req.body);
        if (isValid) {
            const user = await User.create(req.body);
            res.status(201).json({ message: "User created successfully", user });
        } else {
            throw new Error("Missing mandatory fields");
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.post('/login', async (req, res) => {
    try {
        const {password,_id } = req.body;
        const user = await User.findById( _id );
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", user });
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }   
});

app.get('/info', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "Users fetched successfully", users });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/info/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ message: "User fetched successfully", user });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
});

app.delete('/info/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully", user });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
});

app.patch('/info/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });
        res.status(200).json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
});
