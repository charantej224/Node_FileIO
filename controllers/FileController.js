var fileService = require("../services/FileService");

module.exports = {
    getFileName : function(request, response){
       console.log("got message here. : file name " + request.query.fileName);
       //fileService.readFileWithContent(req.query.fileName);
       fileService.readFileWithContent(request.query.fileName.toString(),(data)=> {
        response.send(data);
       });
    },
    postFileContent : function(request,response){
        console.log(request.body);
        fileService.writeFileWithContent(request.body.fileName,JSON.stringify(request.body.fileContents),(data) => {
            {
                response.send(data);
            }
        });
    }
}