// utils/response.js

/**
 * 通用响应函数
 * @param {number} status - HTTP 状态码
 * @param {any} data - 返回的数据
 * @param {string} msg - 返回的消息
 * @returns {ResType}
 */
const createResponse = (status, data = null, msg = '') => {
    return {
      status,
      data,
      msg
    };
  };
  
  module.exports = createResponse;
  