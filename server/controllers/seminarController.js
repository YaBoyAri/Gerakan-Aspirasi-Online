const db = require("../config/db");

exports.getSeminar = (req, res) => {
  db.query("SELECT * FROM pengajuan_seminar", (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.postSeminar = (req, res) => {
  const { Jurusan, Judul_Seminar, Deskripsi_Seminar, proses } = req.body;

  if (!Jurusan || !Judul_Seminar || !Deskripsi_Seminar) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const sql = `
    INSERT INTO pengajuan_seminar 
    (Jurusan, Judul_Seminar, Deskripsi_Seminar, proses)
    VALUES (?, ?, ?, ?)`;

  db.query(sql, [Jurusan, Judul_Seminar, Deskripsi_Seminar, proses], (err) => {
    if (err) return res.status(500).json({ message: "Gagal mengirim data" });
    res.json({ message: "Pengajuan seminar berhasil dikirim" });
  });
};
