// controllers/kinerjaDosenController.js
const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM kinerja_dosen', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM kinerja_dosen WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.deleteById = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM kinerja_dosen WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Laporan berhasil dihapus' });
  });
};