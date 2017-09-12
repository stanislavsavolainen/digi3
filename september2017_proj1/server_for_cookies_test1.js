var express = require('express');
var app = express();

var server_port = 8283; 

var bodyParser = require('body-parser');


var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}
//app.use(express.static('web_public'))

app.use(allowCrossDomain);


// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/cookies_to_server1', urlencodedParser, function (req, res) {
  console.log("cookies server side endpoint !");

 res.send(JSON.stringify(req.body));
});


app.listen(server_port,function(){
  console.log("App Started on PORT " + server_port);
});

