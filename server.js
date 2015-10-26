var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/1.html'));
  //__dirname : It will resolve to your project folder.
});


app.get('/:file',function(req,res){
	var filename = req.params.file;
  res.sendFile(path.join(__dirname+'/'+filename));
  //__dirname : It will resolve to your project folder.
});


app.listen(3000);

console.log("Running at Port 3000");