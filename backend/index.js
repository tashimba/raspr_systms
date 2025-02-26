const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "users_lab2",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const sql = "SELECT * FROM users WHERE name = ? AND password = ?";
  db.query(sql, [name, password], (error, results) => {
    if (error || results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful" });
  });
});

app.post("/register", (req, res) => {
  const { name, password, number } = req.body;
  console.log(name, password, number);
  if (!name || !password || !number) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO users (name, password, number) VALUES (?, ?, ?)";
  db.query(sql, [name, password, number], (error) => {
    if (error)
      return res
        .status(555)
        .json({ message: "Error registering user" + error });
    res.status(201).json({ message: "User registered successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
