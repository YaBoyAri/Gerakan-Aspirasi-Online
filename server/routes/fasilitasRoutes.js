const express = require("express");
const router = express.Router();
const fasilitasController = require("../controllers/fasilitasController");
const upload = require("../config/multerConfig");

// GET semua laporan kerusakan fasilitas
router.get("/", fasilitasController.getFasilitas);

// POST laporan kerusakan dengan berkas
router.post("/", upload.single("berkas"), fasilitasController.postFasilitas);

module.exports = router;
