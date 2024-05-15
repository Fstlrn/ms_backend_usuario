"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarUser = exports.modificarUser = exports.logueoUser = exports.listarUser = exports.eliminarUser = exports.crearUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _msj = require("../message/msj.js");
var _dbMysql = _interopRequireDefault(require("../config/db.mysql.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _dotenv = require("dotenv");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
(0, _dotenv.config)();
var crearUser = exports.crearUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var nombre, correo, contra, claveSinCifrar, hash, _contra, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          nombre = req.body.name;
          correo = req.body.email;
          contra = req.body.password;
          claveSinCifrar = contra;
          _context.prev = 4;
          _context.next = 7;
          return _bcrypt["default"].hash(claveSinCifrar, 2);
        case 7:
          hash = _context.sent;
          _contra = hash;
          _context.next = 11;
          return _dbMysql["default"].query("CALL sp_crear('".concat(nombre, "','").concat(correo, "','").concat(hash, "');"));
        case 11:
          respuesta = _context.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _msj.success)(req, res, 200, "Usuario agregado");
          } else {
            (0, _msj.error)(req, res, 400, "No se puede agregar");
          }
          _context.next = 18;
          break;
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](4);
          (0, _msj.error)(req, res, 501, _context.t0);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 15]]);
  }));
  return function crearUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var mostrarUser = exports.mostrarUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params['id'];
          _context2.prev = 1;
          _context2.next = 4;
          return _dbMysql["default"].query("CALL sp_buscar(".concat(id, ");"));
        case 4:
          respuesta = _context2.sent;
          console.log(respuesta);
          (0, _msj.success)(req, res, 200, respuesta[0]);
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          (0, _msj.error)(req, res, 500, _context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return function mostrarUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var listarUser = exports.listarUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _dbMysql["default"].query("CALL sp_todo();");
        case 3:
          respuesta = _context3.sent;
          console.log(respuesta);
          (0, _msj.success)(req, res, 200, respuesta[0]);
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          (0, _msj.error)(req, res, 500, _context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function listarUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var modificarUser = exports.modificarUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, nombre, correo, contra, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          nombre = req.body.name;
          correo = req.body.email;
          contra = req.body.password;
          _context4.prev = 4;
          _context4.next = 7;
          return _dbMysql["default"].query("CALL sp_modify('".concat(id, "','").concat(nombre, "','").concat(correo, "','").concat(contra, "');"));
        case 7:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _msj.success)(req, res, 200, "Usuario modificado");
          } else {
            (0, _msj.error)(req, res, 400, "No se puede modifikcar");
          }
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](4);
          (0, _msj.error)(req, res, 501, _context4.t0);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[4, 11]]);
  }));
  return function modificarUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var eliminarUser = exports.eliminarUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _dbMysql["default"].query("CALL sp_eliminar('".concat(id, "');"));
        case 4:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _msj.success)(req, res, 200, "Usuario eliminado");
          } else {
            (0, _msj.error)(req, res, 400, "No se puede modificar");
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          (0, _msj.error)(req, res, 501, _context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminarUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var logueoUser = exports.logueoUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, usuario, contra, hash, respuesta, match, playload, token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, usuario = _req$body.usuario, contra = _req$body.contra;
          _context6.next = 3;
          return _bcrypt["default"].hash(contra, 2);
        case 3:
          hash = _context6.sent;
          _context6.prev = 4;
          _context6.next = 7;
          return _dbMysql["default"].query("CALL sp_buscarU('".concat(usuario, "')"));
        case 7:
          respuesta = _context6.sent;
          if (!(respuesta[0][0] == 0)) {
            _context6.next = 11;
            break;
          }
          (0, _msj.error)(req, res, 404, "Usuario no existente");
          return _context6.abrupt("return");
        case 11:
          _context6.next = 13;
          return _bcrypt["default"].compare(contra, respuesta[0][0][0].password);
        case 13:
          match = _context6.sent;
          if (match) {
            _context6.next = 17;
            break;
          }
          (0, _msj.error)(req, res, 401, "Clave errada");
          return _context6.abrupt("return");
        case 17:
          playload = {
            "usuario": usuario
          };
          token = _jsonwebtoken["default"].sign(playload, process.env.TOKEN_PRIVATEKEY, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
          });
          (0, _msj.success)(req, res, 200, {
            token: token
          });
          _context6.next = 25;
          break;
        case 22:
          _context6.prev = 22;
          _context6.t0 = _context6["catch"](4);
          (0, _msj.error)(req, res, 500, "intente otra vez", _context6.t0);
        case 25:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[4, 22]]);
  }));
  return function logueoUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();