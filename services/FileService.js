var fs = require("fs");

var writeFileWithContent = (fileName,fileContent,callback) => {
    fs.writeFile(fileName,fileContent, (err) => {
        if(err){
            console.log("File write with name " + fileName + "failed");
            callback("File write with name " + fileName + "failed");
        } else {
            console.log("File write with name " + fileName + " successful");
            callback("File write with name " + fileName + " successful");
        }

    });
};

var readFileWithContent = (fileName,callback) =>  {
    fs.readFile(fileName,'utf8',(err,data) => {
        if(err){
            console.error(err);
            console.log("reading the file with name " + fileName + " failed, please try again");
            callback("reading the file with name " + fileName + " failed, please try again");
        } else {
            console.log(data);
            callback(data);
        }
    })
}

module.exports= {
    writeFileWithContent,
    readFileWithContent
}