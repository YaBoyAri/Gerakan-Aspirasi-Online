const express = require("express");
const router = express.Router();
const dosenController = require("../controllers/dosenController");

// Cek apakah fungsi dari controller berhasil diambil
console.log("GET Kinerja Dosen:", dosenController.getKinerjaDosen);
console.log("POST Kinerja Dosen:", dosenController.postKinerjaDosen);

// GET semua laporan kinerja dosen
router.get("/", dosenController.getKinerjaDosen);

// POST laporan kinerja dosen
router.post("/", dosenController.postKinerjaDosen);

module.exports = router;
