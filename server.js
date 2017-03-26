'use static';

var fs = require('fs');
var express = require('express');
var multer = require('multer');
var mysql = require('mysql');

var config = require('./sql_config.json');
var sql = mysql.createConnection(config.mysql);

var app = express();

var http = require("http");

http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
})

.listen(8080);


//server functions


function error(res, msg, error){

res.sendStatus(500);
console.error(msg, error);

}
