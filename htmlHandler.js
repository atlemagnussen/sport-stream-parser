'use strict';
const http = require('http');
const https = require('https');

class htmlHandler {
    getHtmlFromUrl(url) {
        if (url.indexOf("https://") === 0) {
            return this.getHtml(url, https);
        } else if (url.indexOf("http://") === 0) {
            return this.getHtml(url, http);
        }
        throw "Not supported url, neither http or https!";
    }

    getHtml(url, httpHandler) {
        return new Promise((resolve, reject) => {
            var request = httpHandler.request(url, function (res) {
                var data = '';
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    resolve(data);
                });
            })
            .on('error', function (e) {
                console.log(e.message);
                reject(e);
            });
            request.end();
        });
    }
}
module.exports = new htmlHandler();
