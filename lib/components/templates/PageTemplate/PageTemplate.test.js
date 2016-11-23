'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _PageTemplate = require('./PageTemplate');

var _PageTemplate2 = _interopRequireDefault(_PageTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrap = function wrap() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _PageTemplate2.default,
    _extends({ header: 'header', footer: 'footer' }, props),
    'test'
  ));
};

it('mounts', function () {
  (0, _enzyme.mount)(_react2.default.createElement(
    _PageTemplate2.default,
    { header: 'header', footer: 'footer' },
    'test'
  ));
});

it('renders children when passed in', function () {
  var wrapper = wrap('test');
  expect(wrapper.contains('test')).toBe(true);
});

it('renders header', function () {
  var wrapper = wrap();
  expect(wrapper.contains('header')).toBe(true);
});

it('renders hero', function () {
  var wrapper = wrap({ hero: 'hero' });
  expect(wrapper.contains('hero')).toBe(true);
});

it('renders footer', function () {
  var wrapper = wrap();
  expect(wrapper.contains('footer')).toBe(true);
});