const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register route
router.get("/register", (req, res) => {
  res.render("register");
});

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render("register", { existing_user: true });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.redirect("/auth/login");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login route
router.get("/login", (req, res) => {
  res.render("login");
});

// Log in an existing user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.render("login", { username_not_found: true });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });
      res.cookie("token", token);
      return res.redirect("/protected");
    } else {
      return res.render("login", { invalid_credentials: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Logout route
router.post("/logout", (req, res) => {
  // Clear JWT token cookie
  res.clearCookie("token");
  res.redirect("/auth/login");
});

module.exports = router;