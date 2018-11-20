const tar = require('tar');
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const dirPath = require('./dirPath.js');

// 区块打包


//模板打包
const aTplFiles = fs.readdirSync(dirPath.tplInputPath);
console.log(aTplFiles);
aTplFiles.forEach(item => {
    const nodeModules = path.resolve(dirPath.tplInputPath, item, 'node_modules');
    const inputPath = path.resolve(dirPath.tplInputPath, item);
    fs.exists(nodeModules, exist => {
        if (exist) {
            shell.rm('-rf', nodeModules);//删除模板中的依赖文件夹
        }
        const aCurTplFiles = fs.readdirSync(inputPath);
        
        tar.c(
            {
                file: `${item}.tar`
            },
            [aCurTplFiles]//需要打包模板路径
        ).then(() => {
            fs.createReadStream(`${item}.tar`).pipe(
                fs.createWriteStream(`${dirPath.tplOutPath}/${item}.tar`)
            );
            shell.rm(`${item}.tar`);//删除当前文件夹下的.tar文件
        });
    });
});

