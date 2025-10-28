
const express = require('express') ;
const cors = require('cors');
const mysql = require('mysql2')

// --- configuration d'appel---
const app = express();
app.use(cors());
app.use(express.json());

// --- CONNECTION  A MA BASE DES DONNEES ---
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "dascom",       
  password: "1234",       
  database: "gracededieu" 
});

db.connect(err => {
  if (err) {
    console.error(" Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});


// Signup pour enseignant
app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Missing fields" });

  const sql = "INSERT INTO teachers (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "User already exists" });
      }
      return res.status(500).json({ error: err });
    }
    res.json({ message: "Signup successful" });
  });
});

// Login enseignant
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM teachers WHERE username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(400).json({ message: "User not found" });

    const teacher = results[0];
    if (teacher.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.json({ message: "Login successful" });
  });
});

// --- START MY SERVER ---
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
