/*
 * Module dependencies
 */
var express = require('express');
var stylus = require('stylus');
var nib = require('nib');

/*
 * Initiliase app and settings
 */
var app = express();

function compile(str, path) {
  return stylus(str)
  .set('filename', path)
  .use(nib());
}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));
process.env.PWD = process.cwd()
app.use(express.static(process.env.PWD + '/public'));

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'toloiiii'}));
app.use(app.router);

/*
 * Routing
 */
app.use('/', require('./scripts/router').middleware);

/*
 * Start the server
 */
app.listen(process.env.PORT || 5000);