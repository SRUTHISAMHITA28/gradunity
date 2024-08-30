const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

router.post('/signup', async (req, res) => {
  const { name, username, password, college_registration_number, college_email_id } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO users (name, username, password, college_registration_number, college_email_id) VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [name, username, hashedPassword, college_registration_number, college_email_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: 'User registered' });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = `SELECT * FROM users WHERE username = ?`;

  db.query(sql, [username], async (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ token });
  });
});

module.exports = router;
