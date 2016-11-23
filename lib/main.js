'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactHotLoader = require('react-hot-loader');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _components = require('components');

require('babel-polyfill');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'config/reactotronConfig'
var store = (0, _configureStore2.default)();

var root = document.getElementById('root');

var renderApp = function renderApp() {
  return _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouter.BrowserRouter,
        null,
        _react2.default.createElement(_components.App, null)
      )
    )
  );
};

(0, _reactDom.render)(renderApp(), root);

if (module.hot) {
  module.hot.accept('components', function () {
    require('components'); // eslint-disable-line global-require

    (0, _reactDom.render)(renderApp(), root);
  });
}