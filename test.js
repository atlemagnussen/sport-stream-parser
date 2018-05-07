'use strict';
const os = require('os');
const path = require('path');
// const htmlHandler = require('./htmlHandler.js');
const acestreamParser = require('./acestreamParser.js');

var configHttp = {
    match: "rom-liv",
    streamSite: "http://www.footballstreamings.com/live-streams/5982/Roma-v-Liverpool.html",
    outputFileName: "./testFiles/ace.m3u"
};

acestreamParser.GetAceStreamM3uList(configHttp)
.then(res => {
    console.log(res);
});

var configHttps = {
    match: "lok-atl",
    streamSite: "https://www.streamsports.io/live/europe/uefa-europa-league/93031/lokomotiv-moskva-vs-atletico-madrid/",
    outputFileName: "./testFiles/ace.m3u"
};

acestreamParser.GetAceStreamM3uList(configHttps)
.then(res => {
    console.log(res);
});

var homedir = os.homedir();
console.log(`homedir: ${homedir}`);
var fullpath = path.join(homedir, 'ace.m3u');
console.log(`fullpath: ${fullpath}`);
