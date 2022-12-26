const express = require('express');

const MahasiswaController = require('../controllers/MahasiswaController');
const router = express.Router();


router.get('/', MahasiswaController.getAllMahasiswa);
router.post('/', MahasiswaController.createNewMahasiswa);
router.put('/:idmahasiswa', MahasiswaController.updateMahasiswa);
router.delete('/:idmahasiswa', MahasiswaController.deleteMahasiswa);

module.exports = router;