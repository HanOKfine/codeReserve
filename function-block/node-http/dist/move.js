const fs = require('fs')
const path = require('path')

let dirPath = path.resolve(__dirname + '/html/')
console.log(dirPath);


fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.warn(err)
    }
    let typeArray = {}
    files.map(item => {
        let title = item.slice(0, item.indexOf('--'))
        if (!typeArray[title]) {
           
            let srcPath = `${__dirname}/html/${item}`
            typeArray[title] = title

            try {
                fs.mkdirSync(`${__dirname}/mulu/${title}`, (err) => {
                    if (err) {
                        console.warn("创建文件夹失败！！")
                    }
                })
            } catch (error) {
                console.warn("文件夹已存在")
            }
           
            let targetPath = `${__dirname}/mulu/${title}`
            var rs = fs.createReadStream(srcPath);
            rs.on('error', function (err) {
                if (err) {
                    console.log('read error', srcPath);
                }
            })

            var ws = fs.createWriteStream(`${targetPath}/${item}`);
            ws.on('error', function (err) {
                if (err) {
                    console.log('write error', targetPath);
                }
            })
            ws.on('close', function (ex) {

            })

            rs.pipe(ws);

        } else {

            let targetPath = `${__dirname}/mulu/${title}`
            let srcPath = `${__dirname}/html/${item}`


     
            var rs = fs.createReadStream(srcPath);
            rs.on('error', function (err) {
                if (err) {
                    console.log('read error', srcPath);
                }
            })

            var ws = fs.createWriteStream(`${targetPath}/${item}`);
            ws.on('error', function (err) {
                if (err) {
                    console.log('write error', targetPath);
                }
            })
            ws.on('close', function (ex) {

            })

            rs.pipe(ws);

        }
        console.dir(item)
    })
})



