const port = 8000;
const acestreamParser = require('./acestreamParser.js');
const path = require('path');
var express = require('express');
var app = express();
var router = express.Router();

// static /
var staticOpts = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['js', 'html'],
    index: 'index.html',
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res) {
        res.set('x-timestamp', Date.now());
    }
};

var clientPath = path.join(__dirname, 'web');
console.log("clientPath=" + clientPath);
app.use(express.static(clientPath, staticOpts));
router.post('/parse', function (req, res) {
    var config = {
        match: req.body.match,
        streamSite: req.body.streamSite
    };

    console.log("config=" + JSON.stringify(config));

    acestreamParser.GetAceStreamM3uList(config)
    .then(result => {
        console.log(result);
        res.send(result);
    });
});

app.set('trust proxy', true);
app.set('trust proxy', 'loopback');

app.use(express.json());
app.use('/api', router);
app.listen(port);
console.log("Listening on port: " + port);
