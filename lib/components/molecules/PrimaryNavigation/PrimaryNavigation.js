'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryNavigation = function PrimaryNavigation(props) {
  return _react2.default.createElement(
    'nav',
    props,
    _react2.default.createElement(
      _components.Link,
      { to: '/' },
      'Root'
    ),
    _react2.default.createElement(
      _components.Link,
      { to: '/test' },
      'Test'
    )
  );
};

exports.default = PrimaryNavigation;

// <li><StyledLink to="/" activeOnlyWhenExact activeClassName="active">Home</StyledLink></li>
// <li><StyledLink to="/sample-page" activeClassName="active">Sample page</StyledLink></li>