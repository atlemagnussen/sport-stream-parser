const htmlHandler = require('./htmlHandler.js');
const fs = require("fs");
const url = "https://www.streamsports.io/live/england/premier-league/18843/afc-bournemouth-vs-tottenham-hotspur/"
const localFileName = "./testFiles/bou-tot.html"

htmlHandler.getHtmlHttps(url)
.then(res => {
    console.log(res);
});
