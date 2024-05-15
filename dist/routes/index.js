"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routesMain = _interopRequireDefault(require("./routes.main.js"));
var _routerUser = require("./router.user.js");
var ruta = (0, _express.Router)();
ruta.use("/", _routesMain["default"]);
ruta.use("/api", _routerUser.rutaUser);
var _default = exports["default"] = ruta;