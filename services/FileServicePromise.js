var fs = require("fs");
var promise = require("promise");

var writeFileWithContentPromise = (fileName, fileContent) => {

    return new promise((resolve, reject) =>
        fs.writeFile(fileName, fileContent, (err) => {
            if (err) {
                console.log("File write with name " + fileName + "failed");
                reject(err);
            } else {
                console.log("File write with name " + fileName + " successful");
                resolve("File write with name " + fileName + " successful");
            }
        })
    );
};

var readFileWithContentPromise = (fileName) => {
    return new promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                console.log("reading the file with name " + fileName + " failed, please try again");
                reject(err);
            } else {
                console.log(data);
                resolve(data);
            }
        })
    }
    );
};

module.exports = {
    writeFileWithContentPromise,
    readFileWithContentPromise
}