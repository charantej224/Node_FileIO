var fileServiceWithPromise = require("../services/FileServicePromise");

var writeFileContentWithPromise = (request, response) => {
    fileServiceWithPromise.writeFileWithContentPromise(request.body.fileName.toString(), JSON.stringify(request.body.fileContents)).then(function (data, err) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            response.send(data);
        }
    });
}

var readFileContentWithPromise = (request, response) => {
    fileServiceWithPromise.readFileWithContentPromise(request.query.fileName.toString()).then(function (data, err) {
        if (err) {
            console.log(err);
        } else {
            response.send(data);
        }
    })
}

var asyncWriteFileContent = async function(request,response) {
    var result = await fileServiceWithPromise.writeFileWithContentPromise(request.body.fileName.toString(), JSON.stringify(request.body.fileContents));
    response.send(result);
}

var asyncReadFileContent = async function(request,response) {
    var result = await fileServiceWithPromise.readFileWithContentPromise(request.query.fileName.toString());
    response.send(result);
}

module.exports = {
    writeFileContentWithPromise,
    readFileContentWithPromise,
    asyncWriteFileContent,
    asyncReadFileContent
}