const db = require("../config/db");

exports.getKinerjaDosen = (req, res) => {
  db.query("SELECT * FROM kinerja_dosen", (err, results) => {
    if (err) return res.status(500).json({ error: "Gagal mengambil data" });
    res.json(results);
  });
};

exports.postKinerjaDosen = (req, res) => {
  const { Subjek_Aspirasi, Target_Aspirasi, Jurusan_Dosen, Matakuliah_Dosen, Isi_Aspirasi } = req.body;

  const sql = `
    INSERT INTO kinerja_dosen 
    (Subjek_Aspirasi, Target_Aspirasi, Jurusan_Dosen, Matakuliah_Dosen, Isi_Aspirasi)
    VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [Subjek_Aspirasi, Target_Aspirasi, Jurusan_Dosen, Matakuliah_Dosen, Isi_Aspirasi], (err) => {
    if (err) return res.status(500).json({ error: "Gagal menyimpan data" });
    res.json({ message: "Aspirasi berhasil dikirim!" });
  });
};