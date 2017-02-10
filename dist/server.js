'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.get(_config2.default.server.root, function (request, response) {
  response.send('first try');
});

server.listen(_config2.default.server.port, function () {
  console.log('Listening at port \xB4' + _config2.default.server.port);
});