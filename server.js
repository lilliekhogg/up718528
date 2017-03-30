'use strict';
var express = require('express'),
app = express();

app.use(express.static(__dirname + '/'));

app.listen(8080);
console.log("server started");

function error (res,msg,error){
        res.sendStatus(500);
        console.error(msg,error);
}
