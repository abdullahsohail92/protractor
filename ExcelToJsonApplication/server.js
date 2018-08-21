var express = require('express');
var router = express.Router();
var app = express();
var xlsxtojson = require("xlsx-to-json");
var xlstojson = require("xls-to-json");
var http = require('http');
var multer = require('multer')();
var fs = require('fs');

app.use(function (req, res, next) { //allow cross origin requests
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
	res.header("Access-Control-Max-Age", "3600");
	res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	next();
});

// configuration
app.use(express.static(__dirname + '/public'));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(express.json());       // to support JSON-encoded bodies


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

var teppath='';

app.get('/api/xlstojson',function(req, res){
	var file = teppath;
	var name = 'testdata.json'
	res.download(file, name);
});
app.post('/api/xlstojson', multer.any(), function (req, res) {
	let file = req.files[0];
	let path = "./ExcelFiles/" + file.originalname;
	//let outPath = "./JSONFiles/" + file.originalname+'.json';

	//to save file within this project
	let outPath = "./JSONFiles/" + 'testdata.json';
	teppath=outPath;
	//to save file to protractor project
	//let outPath = "../datadriven/TestData/" + 'testdata.json';
	
	console.log(outPath);
	fs.writeFileSync(path, file.buffer);
	xlsxtojson({
		input: path,
		//input:"./TestData.xlsx"	,	// input xls 
		output: outPath, // output json 
		lowerCaseHeaders: true
	}, function (err, result) {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});

});

app.get('/api/xlstojson',function(req, res){
	var file = teppath;
	var name = 'testdata.json'
	res.download(file, name);
	
});


app.listen(3000);
console.log("Started");