'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _api = require('api');

var api = _interopRequireWildcard(_api);

var _types = require('actions/types');

var _types2 = _interopRequireDefault(_types);

var _actions = require('actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [getRandomNumber, mySaga].map(regeneratorRuntime.mark);

function getRandomNumber() {
  var id, number;
  return regeneratorRuntime.wrap(function getRandomNumber$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id = _uuid2.default.v4();
          _context.next = 4;
          return (0, _effects.put)(actions.awaitingRandomNumber(id));

        case 4:
          _context.next = 6;
          return (0, _effects.call)(api.generateRandomNumber);

        case 6:
          number = _context.sent;
          _context.next = 9;
          return (0, _effects.put)(actions.addRandomNumber(id, number));

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](0);

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 11]]);
}

function mySaga() {
  return regeneratorRuntime.wrap(function mySaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _reduxSaga.takeEvery)(_types2.default.REQUEST_RANDOM_NUMBER, getRandomNumber);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

exports.default = mySaga;