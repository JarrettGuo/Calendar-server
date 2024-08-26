const express = require('express');
const router = express.Router();
const {
  getAllAppointments,
  createAppointment,
  deleteAppointment
} = require('../controllers/appointmentsController');

// 获取所有预约
router.get('/', getAllAppointments);

// 创建新预约
router.post('/', createAppointment);


// 删除预约
router.delete('/:id', deleteAppointment);

module.exports = router;
