'use strict';
// const http = require('http');
const https = require('https');

class htmlHandler {
    getHtmlHttps(url) {
        return new Promise((resolve, reject) => {
            var request = https.request(url, function (res) {
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
