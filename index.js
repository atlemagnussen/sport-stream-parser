const config = {
    match: "bou-tot",
    streamSite: "https://www.streamsports.io/live/england/premier-league/18843/afc-bournemouth-vs-tottenham-hotspur/",
    outputFileName: "./testFiles/ace.m3u"
};

var output = `#EXTM3U`;
const hashes = "#################################################################################################################################";
const matchM3uTemplate = `\n\n#EXTINF:-1 tvg-logo="http://www.chemistryviews.org/common/images/thumbnails/source/129ad1e3047.jpg" group-title="INFO", `;
const fs = require("fs");
var counter = 0;
const htmlHandler = require('./htmlHandler.js');
const htmlparser = require("htmlparser2");
const parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "a" && attribs.href.indexOf("acestream:/") > -1) {
            counter ++;
            var matchurl = cleanUrl(attribs.href);
            output += matchM3uTemplate + config.match + counter + "\n" + matchurl;
        }
    }
}, {decodeEntities: true});

htmlHandler.getHtmlHttps(config.streamSite)
.then(res => {
    console.log(`${hashes}\nhtml read from ${config.streamSite}\n${hashes}`);
    return res;
})
.then(html => {
    parser.write(html);
    parser.end();
    console.log(output);
    fs.writeFile(config.outputFileName, output, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log(`\n${hashes}\nWrote ${config.outputFileName}\n${hashes}`);
        }
    });
});


function cleanUrl(url) {
    var startIndex = url.indexOf("acestream:/");
    if (startIndex > 0) {
        url = url.substring(startIndex);
    }
    return url;
}
