const createResponse = require('../utils/response');
const patients = require('../data/patients.json'); 

// 获取所有患者信息
const getAllPatients = (req, res) => {
  res.json(createResponse(200, patients, 'Patients retrieved successfully'));
};

module.exports = {
  getAllPatients,
};
