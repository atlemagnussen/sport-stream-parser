const config = {
    match: "bou-tot",
    streamSite: "https://www.streamsports.io/live/england/premier-league/18843/afc-bournemouth-vs-tottenham-hotspur/",
    outputFileName: "./testFiles/ace.m3u"
};
const acestreamParser = require('./acestreamParser.js');
var path = require('path');
var express = require('express');

var port = 8088;
var app = express();
var router = express.Router();
app.use(express.static(path.join(__dirname, 'client')));
app.get('/', function(req, res) {
    res.sendfile(__dirname + './client/index.html');
});

router.get('/', function (req, res) {
    res.json({ message: 'no rigs!! Need some websocket here right' });
});

app.use('/api', router);
app.listen(port);
console.log("Listening on port: " + port);
