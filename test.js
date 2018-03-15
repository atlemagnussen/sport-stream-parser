'use strict';
// const htmlHandler = require('./htmlHandler.js');
const acestreamParser = require('./acestreamParser.js');
var config = {
    match: "lok-atl",
    streamSite: "https://www.streamsports.io/live/europe/uefa-europa-league/93031/lokomotiv-moskva-vs-atletico-madrid/",
    outputFileName: "./testFiles/ace.m3u"
};


acestreamParser.GetAceStreamM3uList(config)
.then(res => {
    console.log(res);
});
