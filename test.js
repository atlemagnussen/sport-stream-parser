'use strict';
// const htmlHandler = require('./htmlHandler.js');
const acestreamParser = require('./acestreamParser.js');
var config = {
    match: "bou-tot",
    streamSite: "https://www.streamsports.io/live/england/premier-league/18843/afc-bournemouth-vs-tottenham-hotspur/",
    outputFileName: "./testFiles/ace.m3u"
};


acestreamParser.GetAceStreamM3uList(config)
.then(res => {
    console.log(res);
});
