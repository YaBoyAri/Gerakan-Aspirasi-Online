const db = require("../config/db");

exports.getKebijakan = (req, res) => {
  db.query("SELECT * FROM kebijakan_kampus", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.postKebijakan = (req, res) => {
  const { judul_aspirasi, nama_kebijakan, isi_aspirasi, proses } = req.body;
  const dataPendukung = req.file ? req.file.filename : "";
  const sql = `
    INSERT INTO kebijakan_kampus 
    (judul_aspirasi, nama_kebijakan, isi_aspirasi, data_pendukung, proses)
    VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [judul_aspirasi, nama_kebijakan, isi_aspirasi, dataPendukung, proses], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Laporan berhasil ditambahkan" });
  });
};