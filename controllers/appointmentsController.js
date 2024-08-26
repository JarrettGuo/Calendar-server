const fs = require('fs');
const path = require('path');
const createResponse = require('../utils/response');
let appointments = require('../data/appointments.json');

// 将数据写入 appointments.json 文件
const saveAppointments = (appointments) => {
  fs.writeFileSync(
    path.join(__dirname, '../data/appointments.json'),
    JSON.stringify(appointments, null, 2),
    'utf8'
  );
};

// 获取所有预约
const getAllAppointments = (req, res) => {
  res.json(createResponse(200, appointments, 'Appointments retrieved successfully'));
};

// 创建新预约
const createAppointment = (req, res) => {
  const newAppointment = {
    id: Date.now().toString(),
    ...req.body,
  };
  appointments.push(newAppointment);
  saveAppointments(appointments);  // 保存数据
  res.status(201).json(createResponse(201, newAppointment, 'Appointment created successfully'));
};


// 删除预约
const deleteAppointment = (req, res) => {
  const { id } = req.params;
  appointments = appointments.filter(appt => appt.id !== id);
  saveAppointments(appointments);  // 保存数据
  res.status(204).json(createResponse(204, null, 'Appointment deleted successfully'));
};

module.exports = {
  getAllAppointments,
  createAppointment,
  deleteAppointment
};
