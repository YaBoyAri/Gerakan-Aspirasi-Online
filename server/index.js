// Memuat konfigurasi environment dari .env
require("dotenv").config();

// Import package dan file konfigurasi
const express = require("express");
const cors = require("cors");

// Import koneksi database dan routes
const db = require("./config/db");
const kebijakanRoutes = require("./routes/kebijakanRoutes");
const seminarRoutes = require("./routes/seminarRoutes");
const fasilitasRoutes = require("./routes/fasilitasRoutes");
const dosenRoutes = require("./routes/dosenRoutes");
const ormawaRoutes = require("./routes/ormawaRoutes");
const adminKinerjaDosenRoutes = require('./routes/adminKinerjaDosenRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menyajikan file statis dari folder uploads
app.use("/uploads", express.static("uploads"));

// Menyambungkan routes ke aplikasi
app.use("/kebijakan_kampus", kebijakanRoutes);
app.use("/pengajuan_seminar", seminarRoutes);
app.use("/kerusakan_fasilitas", fasilitasRoutes);
app.use("/kinerja_dosen", dosenRoutes);
app.use("/ormawa", ormawaRoutes);
app.use('/admin', adminKinerjaDosenRoutes);

// Menjalankan server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server backend berjalan di port ${port}`);
});