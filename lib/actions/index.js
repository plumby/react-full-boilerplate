'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestRandomNumber = requestRandomNumber;
exports.awaitingRandomNumber = awaitingRandomNumber;
exports.addRandomNumber = addRandomNumber;

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestRandomNumber() {
  return {
    type: _types2.default.REQUEST_RANDOM_NUMBER
  };
}

function awaitingRandomNumber(id) {
  return {
    type: _types2.default.AWAITING_RANDOM_NUMBER,
    id: id
  };
}

function addRandomNumber(id, number) {
  return {
    type: _types2.default.ADD_RANDOM_NUMBER,
    id: id,
    number: number
  };
}