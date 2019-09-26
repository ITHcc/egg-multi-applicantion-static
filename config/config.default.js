'use strict';

const path = require('path');

module.exports = appInfo => {
  const exports = {};

  /**
   * 多应用静态资源入口配置
   * 
   * @param {string} prefix 二级域名 (根据域名来区分)
   * @param {string} dir 静态资源路径
   * @param {object} options
   * @see https://github.com/koajs/static#readme
   */
  exports.multiApplicationStatic = [];
  return exports;
};
