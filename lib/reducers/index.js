'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = exports.getRandomNumbers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _types = require('actions/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // import { routerReducer as routing } from 'react-router-redux';


var allNumbers = function allNumbers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _types2.default.AWAITING_RANDOM_NUMBER:
      {
        var num = _defineProperty({}, action.id, null);
        return Object.assign({}, _extends({}, state, num));
      }
    case _types2.default.ADD_RANDOM_NUMBER:
      {
        var _num2 = _defineProperty({}, action.id, action.number);
        return Object.assign({}, _extends({}, state, _num2));
      }
    default:
      return state;
  }
};

// AWAITING_RANDOM_NUMBER
var randomNumbers = function randomNumbers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types2.default.AWAITING_RANDOM_NUMBER:
      return [].concat(_toConsumableArray(state), [action.id]);
    default:
      return state;
  }
};

var getRandomNumbers = exports.getRandomNumbers = function getRandomNumbers(state) {
  return state.randomNumbers.map(function (id) {
    return state.allNumbers[id];
  });
};

var test = exports.test = function test() {
  return 'test';
};

var rootReducer = (0, _redux.combineReducers)({
  randomNumbers: randomNumbers,
  allNumbers: allNumbers
});

exports.default = rootReducer;