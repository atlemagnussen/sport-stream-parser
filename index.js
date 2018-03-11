const localFileName = "./testFiles/bou-tot.html"
var outputFile = `#EXTM3U`;
const matchM3uTemplate = `#EXTINF:-1 tvg-logo="http://www.chemistryviews.org/common/images/thumbnails/source/129ad1e3047.jpg" group-title="INFO", Match1`;
const fs = require("fs");
var htmlparser = require("htmlparser2");
var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "a" && attribs.href.indexOf("acestream:/") > -1) {
            var url = cleanUrl(attribs.href);
            console.log(url);
        }
    }
}, {decodeEntities: true});


fs.readFile(localFileName, function (err, data) {
    if (err) {
        throw err;
    }
    parser.write(data);
    parser.end();
});

function cleanUrl(url) {
    var startIndex = url.indexOf("acestream:/");
    if (startIndex > 0) {
        url = url.substring(startIndex);
    }
    return url;
}
