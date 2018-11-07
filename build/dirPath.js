/**
 * 路径配置
 */
const path = require('path');
module.exports =  {
  root: __dirname,
  blockInputPath: path.resolve(__dirname, '../block'),
  blockOutPath: path.resolve(__dirname, '../iivbox/block'),

  tplInputPath: path.resolve(__dirname, '../template'),
  tplOutPath: path.resolve(__dirname, '../iivbox/template')
}