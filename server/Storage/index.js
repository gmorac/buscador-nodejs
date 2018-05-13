var fs = require('fs'),
    path = require('path');

    module.exports ={
        getData: function (dataType) {
            var dataPath = dataType == __dirname + path.join('/data/data.json')
            return new promise(function (resolve, reject) {
                fs.readFile(dataPath, 'utf8', function (err, readData){
                    if(err) reject(err)
                    resolve(JSON.parse(readData))
                })
            })
        }
    }