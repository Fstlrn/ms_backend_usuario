"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _app = _interopRequireDefault(require("../app.js"));
var _msj = require("../message/msj.js");
var rutaMain = (0, _express.Router)();
rutaMain.get("/home", function (req, res) {
  res.json({
    "home": _msj.MESSAGE.HOME
  });
});
rutaMain.get("/galery", function (req, res) {
  res.json({
    "galery": _msj.MESSAGE.GALERY
  });
});
rutaMain.get("/about", function (req, res) {
  res.json({
    "about": _msj.MESSAGE.ABOUT
  });
});
rutaMain.get("/contact", function (req, res) {
  res.json({
    "contact": _msj.MESSAGE.CONTACT
  });
});

// const app = express();

// app.set("home", mensaje.HOME);
// app.set("galery", mensaje.GALERY);
// app.set("about", mensaje.ABOUT);
// app.set("contact", mensaje.CONTACT);

// const mensaje = ( MESSAGE );

// // Rutas

// app.get("/home", (req, res) => {
//     res.json({
//         "home" :  app.get("home")
//     })
// })

// app.get("/gallery", (req, res) => {
//     res.json({
//         "gallery" :  app.get("gallery")
//     })
// })

// app.get("/about", (req, res) => {
//     res.json({
//         "about" :  app.get("about")
//     })
// })

// app.get("/contact", (req, res) => {
//     res.json({
//         "contact" :  app.get("contact")
//     })
// })
var _default = exports["default"] = rutaMain;