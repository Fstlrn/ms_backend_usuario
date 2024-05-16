"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = require("dotenv");
var _swaggerAutogen = _interopRequireDefault(require("swagger-autogen"));
(0, _dotenv.config)();
var port = process.env.PORT || 3000;
var doc = {
  info: {
    title: 'Seguridad',
    description: 'Manejo de usuarios'
  },
  host: 'localhost:' + port + "/api"
};
var outputFile = './swagger-output.json';
var routes = ['../routes/routes.main.js', '../routes/router.user.js'];
(0, _swaggerAutogen["default"])()(outputFile, routes, doc);