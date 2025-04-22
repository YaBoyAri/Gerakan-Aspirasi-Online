const db = require("../config/db");

exports.getFasilitas = (req, res) => {
  db.query("SELECT * FROM kerusakan_fasilitas ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.postFasilitas = (req, res) => {
  const { fasilitas_yang_rusak, deskripsi_kerusakan, proses } = req.body;
  const berkas = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO kerusakan_fasilitas 
    (fasilitas_yang_rusak, deskripsi_kerusakan, proses, berkas)
    VALUES (?, ?, ?, ?)`;

  db.query(sql, [fasilitas_yang_rusak, deskripsi_kerusakan, proses, berkas], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Laporan berhasil dikirim" });
  });
};
