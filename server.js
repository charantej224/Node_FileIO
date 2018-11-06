
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes");

var app = express();

/**
 * Funtions automatically executed. 
 */
(
    function(){
        app.listen(3010,() => {
            console.log("running server on port 3010");
        })
    })
    ();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/",routes);
