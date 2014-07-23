
var environment = process.env.NODE_ENV || 'default';

console.log("environment: " + environment);

var config = require('./server-config')[environment];
console.log('Config:');
console.log(config);

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mockFileRoot = config.data_location;
var fs = require('fs');
var walk = require('walk');
var path = require('path');

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

// CONFIG SERVER
//allows us to write cookies
app.use(express.cookieParser());

//allows server to run as proxy
app.enable('trust proxy');
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.static(config.static_site_root));


app.get(config.rest_base_url, function (req, res) {
  var splitPath = req.params[0].split("/"),
    mockPath = path.normalize(mockFileRoot + req.params[0] + path.sep + splitPath[splitPath.length-1] + '.json'),
    mockResponse;

  console.log("Responding to '" + req.params[0] + "' with file '" + mockPath + "'");

  try {
    mockResponse = JSON.parse(fs.readFileSync(mockPath));
    res.send(200, mockResponse)
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

app.get('/statusService/*', function(req, res) {

    var status = req.url.substring(req.url.lastIndexOf('/') + 1);
    res.status(status);
    //console.log("statusService: ", status);
    res.send({});
    return;
});

app.get('/app/*', function(req, res, next) {

    res.sendfile('index.html', {root: config.static_site_root})
});


app.get('*', function(req, res, next) {

    res.status(404);

    // respond with html page
    if (req.accepts('html')) {

        res.sendfile('index.html', {root: config.static_site_root});
        return;
    }

    // respond with json
    if (req.accepts('json')) {

        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});


// FIRE IT UP
var port = Number(process.env.PORT || config.port);
server.listen(port, function () {
  console.log("Express server listening on port %d", config.port);
});
