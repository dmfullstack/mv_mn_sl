

/**
 * module dependencies
 */

var express     = require('express');


/**
 * init `express` & `routes`
 */

var routes      = require('./routes');
var http_server = express();
var path = require('path');

/**
 * dispatch requests to the router
 */
http_server.disable('x-powered-by');
http_server.enable('etag', 'strict');
http_server.use(express.static(path.resolve(__dirname, '..', 'dist') ) );
http_server.use('/', routes);



/**
 * `instantiate` express app
 */

http_server.listen(3007, function() {
  'use strict';
  console.log('Express server listening on port 3000');
});


