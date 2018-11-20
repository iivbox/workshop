const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const dirPath = require('./dirPath.js');
const utils = require('./utils');
const tar = require('tar');
// 打包区块到相应的目录

const blockFiles = fs.readdirSync(dirPath.blockInputPath);
// 清空输出目录
shell.rm('-rf', `${dirPath.blockOutPath}/*`);

blockFiles.forEach(function (item, index) {
  let outPath = path.resolve(dirPath.blockOutPath, `${item}.tar`);
  let inputPath = path.resolve(dirPath.blockInputPath, item);
  shell.exec(`tar -cvf ${outPath} ${inputPath}`);
})

// 打包模板到相应的目录
const tplFiles = fs.readdirSync(dirPath.tplInputPath);
// 清空输出目录
shell.rm('-rf', `${dirPath.tplOutPath}/*`);

tplFiles.forEach(function (item, index) {
  let outPath = path.resolve(dirPath.tplOutPath, `${item}.tar`);
  let inputPath = path.resolve(dirPath.tplInputPath, item);
  let nodeModulePath = path.resolve(dirPath.tplInputPath, `${item}/node_modules`);
  // 打包前删除node_modules文件夹
  fs.exists(nodeModulePath, exists => {
    if (exists) {
      shell.rm('rf',  `${nodeModulePath}`);
    }
  })
  

  shell.exec(`tar -cvf ${outPath} ${inputPath}`);
})


