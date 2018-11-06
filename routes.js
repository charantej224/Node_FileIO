var express = require('express');
var fileCtrl = require('./controllers/FileController');
var filePromiseCtrl = require('./controllers/FilePromiseController');

var router = express.Router();

//File Normal controller using callbacks
router.route('/getFileName').get(fileCtrl.getFileName);
router.route('/postFileContent').post(fileCtrl.postFileContent);

//File Controller using Promise.
router.route('/getPromiseFile').get(filePromiseCtrl.readFileContentWithPromise);
router.route('/postPromiseFileContent').post(filePromiseCtrl.writeFileContentWithPromise);

//Async and awaits
router.route('/getAsyncPromiseFile').get(filePromiseCtrl.asyncReadFileContent);
router.route('/postAsyncPromiseFileContent').post(filePromiseCtrl.asyncWriteFileContent);

module.exports = router;