const express = require('express');
const router = express.Router();
const { getAllPatients } = require('../controllers/patientsController');

// 获取所有患者信息
router.get('/', getAllPatients);

module.exports = router;
