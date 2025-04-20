const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// Konfigurasi penyimpanan file dengan multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Pastikan folder "uploads" ada di direktori root project
  },
  filename: function (req, file, cb) {
    // Menyimpan file dengan nama unik (timestamp + original name)
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Tidak perlu express.json() untuk route multipart/form-data

// Menyajikan file statis dari folder uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Konfigurasi koneksi ke MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // sesuai pengaturan XAMPP
  database: "bemilkom_gaspol2022",
});

// Connect ke database
db.connect((err) => {
  if (err) {
    console.error("Gagal terkoneksi ke MySQL:", err);
  } else {
    console.log("Berhasil terkoneksi ke MySQL");
  }
});

// Endpoint GET untuk mengambil semua laporan
app.get("/kebijakan_kampus", (req, res) => {
  const sql = "SELECT * FROM kebijakan_kampus";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Endpoint POST untuk menambahkan laporan baru dengan file upload
app.post("/kebijakan_kampus", upload.single("data_pendukung"), (req, res) => {
  // req.body berisi field teks, req.file berisi informasi file yang diupload
  const {
    judul_aspirasi,
    nama_kebijakan,
    isi_aspirasi,
    proses,
  } = req.body;
  const dataPendukung = req.file ? req.file.filename : "";
  const sql =
    "INSERT INTO kebijakan_kampus (judul_aspirasi, nama_kebijakan, isi_aspirasi, data_pendukung, proses) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      judul_aspirasi,
      nama_kebijakan,
      isi_aspirasi,
      dataPendukung,
      proses,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Laporan berhasil ditambahkan" });
    }
  );
});

// Endpoint GET untuk menampilkan semua pengajuan seminar
app.get("/pengajuan_seminar", (req, res) => {
  const sql = "SELECT * FROM pengajuan_seminar";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// Endpoint POST untuk mengirim pengajuan seminar
app.post("/pengajuan_seminar", (req, res) => {
  const { Jurusan, Judul_Seminar, Deskripsi_Seminar, proses } = req.body;

  if (!Jurusan || !Judul_Seminar || !Deskripsi_Seminar) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const sql = `
    INSERT INTO pengajuan_seminar (Jurusan, Judul_Seminar, Deskripsi_Seminar, proses)
    VALUES (?, ?, ?, ?)
  `;
  const values = [Jurusan, Judul_Seminar, Deskripsi_Seminar, proses];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Gagal mengirim data" });
    }
    res.json({ message: "Pengajuan seminar berhasil dikirim" });
  });
});

app.post("/kerusakan_fasilitas", upload.single("berkas"), (req, res) => {
  const { fasilitas_yang_rusak, deskripsi_kerusakan, proses } = req.body;
  const berkas = req.file ? req.file.filename : null;

  console.log("Received form data:", req.body);
  console.log("Received file:", req.file);

  const sql = "INSERT INTO kerusakan_fasilitas (fasilitas_yang_rusak, deskripsi_kerusakan, proses, berkas) VALUES (?, ?, ?, ?)";
  const values = [fasilitas_yang_rusak, deskripsi_kerusakan, proses, berkas];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Laporan berhasil dikirim" });
  });
});

app.get("/kerusakan_fasilitas", (req, res) => {
  const sql = "SELECT * FROM kerusakan_fasilitas ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server backend berjalan di port ${port}`);
});