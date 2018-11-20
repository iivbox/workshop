const tar = require('tar');
const shell = require('shelljs');
const fs = require('fs');
const dirPath = require('./dirPath.js');

// 区块打包


//模板打包
const aTplFiles = fs.readdirSync(dirPath.tplInputPath);
console.log(aTplFiles);
aTplFiles.forEach(item => {
    //排除build
    if (item === 'build') {
        return;
    }
    const nodeModules = `../${item}/node_modules`;
    fs.exists(nodeModules, exist => {
        if (exist) {
            shell.rm('-rf', nodeModules);//删除模板中的依赖文件夹
        }
        
        tar.c(
            {
                file: `${item}.tar`
            },
            [`../${item}`]//需要打包的模板路径
        ).then(() => {
            // 导出tar文件到指定iivbox/template文件夹下
            fs.createReadStream(`${item}.tar`).pipe(
                fs.createWriteStream(`${dirPath.tplOutPath}/${item}.tar`)
            );
            shell.rm(`${item}.tar`);//删除当前文件夹下的.tar文件
        });
    });
});

