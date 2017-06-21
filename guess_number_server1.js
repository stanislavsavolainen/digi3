//nodeJS + express server module "http-server"
var express = require('express');
var application = express();
var body_parser = require('body-parser');
var port = 5658; //5658

//CORS = cross-origin resouce sharing (allow http-request from other location)
var cors = function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  console.log("Using CORS function !");

  next();	
}

//express use CORS
application.use(cors);

//http-request to url "SERVER_HOST/calculate_numbers"
function request_function1( http_request, http_response){
  console.log("Calculate request happens !");

  var  message_for_client = "Server calculate numbers for you .";	

  var obj = http_request.query.data1; //Object -> String array of key-value pairs --> Get  ?value1=123‚ value2=345, value3=abcd 
 http_request.query.
  
  //you can for-each object of GET values
  //var numbers = obj.value2;
  
  console.log(obj);
  console.log(http_request.query);

  /*
  struct obj{ int value2; }

     <input type="text" id="age" value="50">

      var a = document.getElementById("age").value; 
    */    

  http_response.send("moi");
}

//-----
application.get('/calculate_numbers', request_function1);

//listern server port + init function
function  server_init(){
	console.log("Init function , Server begin working at port : " +port);
}
//-----
var server = application.listen( port, server_init ); 

