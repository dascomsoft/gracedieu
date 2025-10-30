
// const express = require('express') ;
// const cors = require('cors');
// const mysql = require('mysql2')

// // --- configuration d'appel---
// const app = express();
// app.use(cors());
// app.use(express.json());

// // --- CONNECTION  A MA BASE DES DONNEES ---
// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "dascom",       
//   password: "1234",       
//   database: "gracededieu" 
// });

// db.connect(err => {
//   if (err) {
//     console.error(" Database connection failed:", err);
//     return;
//   }
//   console.log("Connected to MySQL");
// });


// // Signup pour enseignant
// app.post("/api/signup", (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) return res.status(400).json({ message: "Missing fields" });

//   const sql = "INSERT INTO teachers (username, password) VALUES (?, ?)";
//   db.query(sql, [username, password], (err, result) => {
//     if (err) {
//       if (err.code === "ER_DUP_ENTRY") {
//         return res.status(400).json({ message: "User already exists" });
//       }
//       return res.status(500).json({ error: err });
//     }
//     res.json({ message: "Signup successful" });
//   });
// });

// // Login enseignant
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;
//   const sql = "SELECT * FROM teachers WHERE username = ?";
//   db.query(sql, [username], (err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     if (results.length === 0) return res.status(400).json({ message: "User not found" });

//     const teacher = results[0];
//     if (teacher.password !== password) {
//       return res.status(401).json({ message: "Invalid password" });
//     }
//     res.json({ message: "Login successful" });
//   });
// });

// // --- START MY SERVER ---
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










// server.js
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// --- configuration d'appel---
const app = express();
app.use(cors());
app.use(express.json());

// --- CONNECTION A LA BASE SQLite ---
const db = new Database('database.sqlite');

// --- CREATION TABLE TEACHERS SI PAS EXISTANTE ---
db.prepare(`
  CREATE TABLE IF NOT EXISTS teachers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`).run();

// --- Signup pour enseignant ---
app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Missing fields" });

  try {
    const stmt = db.prepare("INSERT INTO teachers (username, password) VALUES (?, ?)");
    stmt.run(username, password);
    res.json({ message: "Signup successful" });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(400).json({ message: "User already exists" });
    }
    res.status(500).json({ error: err.message });
  }
});

// --- Login enseignant ---
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const stmt = db.prepare("SELECT * FROM teachers WHERE username = ?");
  const teacher = stmt.get(username);

  if (!teacher) return res.status(400).json({ message: "User not found" });
  if (teacher.password !== password) return res.status(401).json({ message: "Invalid password" });

  res.json({ message: "Login successful" });
});

// --- START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
















