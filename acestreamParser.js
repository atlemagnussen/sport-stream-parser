const matchM3uTemplate = `\n\n#EXTINF:-1 tvg-logo="http://www.chemistryviews.org/common/images/thumbnails/source/129ad1e3047.jpg" group-title="INFO", `;
var counter = 0;
const htmlHandler = require('./htmlHandler.js');
const htmlparser = require("htmlparser2");


class AcestreamParser {
    GetAceStreamM3uList(config) {
        let output = "#EXTM3U";
        var parser = new htmlparser.Parser({
            onopentag: (name, attribs) => {
                if(name === "a" && attribs.href.indexOf("acestream:/") > -1) {
                    counter ++;
                    var matchurl = this.cleanUrl(attribs.href);
                    output += matchM3uTemplate + config.match + counter + "\n" + matchurl;
                }
            }
        }, {decodeEntities: true});
        var promise = htmlHandler.getHtmlHttps(config.streamSite)
        .then(html => {
            parser.write(html);
            parser.end();
            return output;
        });
        return promise;
    }

    cleanUrl(url) {
        var startIndex = url.indexOf("acestream:/");
        if (startIndex > 0) {
            url = url.substring(startIndex);
        }
        return url;
    }
}

module.exports = new AcestreamParser();
