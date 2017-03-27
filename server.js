'use strict';
var express = require('express');
 app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.use('/', express.static(src, { extensions: ['html', 'js', 'json'] }));


app.listen(8080);
console.log("server started");

function error (res,msg,error){
        res.sendStatus(500);
        console.error(msg,error);
}
