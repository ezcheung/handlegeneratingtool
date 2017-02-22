var Path = require('path');
var browserify = require('browserify-middleware');
var express = require('express');
const fs = require('fs');
const uniqueRandomArray = require('unique-random-array');
var app = express();

var wordsG = uniqueRandomArray(fs.readFileSync('./words/wordsG.txt', 'utf8').split('\n'));
var wordsH = uniqueRandomArray(fs.readFileSync('./words/wordsH.txt', 'utf8').split('\n'));
var wordsT = uniqueRandomArray(fs.readFileSync('./words/wordsT.txt', 'utf8').split('\n'));

app.get('/randomhgt', function (req, res) {
  res.send({data: `${wordsH()} ${wordsG()} ${wordsT()}`});
})

app.get('/app-bundle.js',
  browserify('./main.js'));

app.use(express.static('./public'));

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port", port);