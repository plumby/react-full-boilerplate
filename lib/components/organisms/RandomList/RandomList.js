'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = function renderer(_ref) {
  var randomList = _ref.randomList,
      actions = _ref.actions;

  return _react2.default.createElement(
    'div',
    null,
    'Tests....:',
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            return actions.requestRandomNumber();
          } },
        'Add'
      )
    ),
    _react2.default.createElement(
      'ul',
      null,
      randomList.map(function (num, i) {
        return _react2.default.createElement(
          'li',
          { key: i },
          num
        );
      })
    )
  );
};

exports.default = renderer;