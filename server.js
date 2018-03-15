const port = 8080;
const acestreamParser = require('./acestreamParser.js');
var express = require('express');
var app = express();
var router = express.Router();

// static /
var staticOpts = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['js', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res) {
        res.set('x-timestamp', Date.now());
    }
};
app.use(express.static('client', staticOpts));
app.get('/', function(req, res) {
    res.sendfile('client/index.html');
});

router.use(express.json());
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

app.use('/api', router);
app.listen(port);
console.log("Listening on port: " + port);
