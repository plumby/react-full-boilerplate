'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _components = require('components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_components.Header, null),
    _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/', component: _components.HomePage }),
    _react2.default.createElement(_reactRouter.Match, { exactly: true, pattern: '/test', component: _components.RandomNumbersPage })
  );
};

exports.default = App;