var express = require('express');
var app = express();

var fs = require("fs");
var staticDir = __dirname + '/static';
var r= express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

app.use(express.static(__dirname + '/static'));


app.post('/upload', multipartMiddleware, function(req, res) {
	
		
			fs.readFile(req.files.doc.path, function (err, data) {
				  // ...
				  var newPath = __dirname + "/uploads/" + req.files.doc.originalFilename;
				  fs.writeFile(newPath, data, function (err) {
					res.end('{"success" : "Updated Successfully", "status" : 200}');
				  });
				});
				
});

var server = app.listen('8080', function(){
	console.log('Listening on port :8080');
});