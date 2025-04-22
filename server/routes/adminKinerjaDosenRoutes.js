// routes/kinerjaDosen.js
const express = require('express');
const router = express.Router();
const adminKinerjaDosenController = require('../controllers/adminKinerjaDosenController');

router.get('/kinerja_dosen', adminKinerjaDosenController.getAll);
router.get('/kinerja_dosen/:id', adminKinerjaDosenController.getById);
router.delete('/kinerja_dosen/:id', adminKinerjaDosenController.deleteById);

module.exports = router;