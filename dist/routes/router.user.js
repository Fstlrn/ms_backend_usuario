"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rutaUser = void 0;
var _express = require("express");
var _controllersUser = require("../controllers/controllers.user.js");
var _oauth = require("../middleware/oauth.js");
var rutaUser = exports.rutaUser = (0, _express.Router)();
rutaUser.get("/user/:id", _controllersUser.mostrarUser);
rutaUser.get("/user", _controllersUser.listarUser);
rutaUser.post("/user", _oauth.verifyToken, _controllersUser.crearUser);
rutaUser.put("/user", _oauth.verifyToken, _controllersUser.modificarUser);
rutaUser["delete"]("/user", _oauth.verifyToken, _controllersUser.eliminarUser);
rutaUser.post("/login", _controllersUser.logueoUser);