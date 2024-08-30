const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/jobs', (req, res) => {
  const sql = `SELECT * FROM jobs`;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

router.post('/donations', (req, res) => {
  const { amount, method } = req.body;
  const user_id = req.user.id;

  const sql = `INSERT INTO donations (user_id, amount, method) VALUES (?, ?, ?)`;

  db.query(sql, [user_id, amount, method], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: 'Donation recorded' });
  });
});

router.get('/mentorships', (req, res) => {
  const sql = `SELECT * FROM mentorships`;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

module.exports = router;
