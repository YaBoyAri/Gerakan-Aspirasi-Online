const db = require("../config/db");

// GET semua laporan ormawa
exports.getOrmawa = (req, res) => {
  db.query("SELECT * FROM ormawa", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// POST laporan ormawa
exports.postOrmawa = (req, res) => {
  const { Nama, NIM, Jurusan, Organisasi_yang_Dituju, Kritik_dan_Saran } = req.body;

  if (!Nama || !NIM || !Jurusan || !Organisasi_yang_Dituju || !Kritik_dan_Saran) {
    return res.status(400).json({ message: "Mohon lengkapi semua kolom" });
  }

  const sql = `
    INSERT INTO ormawa 
    (Nama, NIM, Jurusan, Organisasi_yang_Dituju, Kritik_dan_Saran)
    VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [Nama, NIM, Jurusan, Organisasi_yang_Dituju, Kritik_dan_Saran], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Aspirasi Ormawa berhasil dikirim" });
  });
};
