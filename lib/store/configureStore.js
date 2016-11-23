'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require('reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = require('sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Reactotron from 'reactotron-react-js'

// const sagaMonitor = Reactotron.createSagaMonitor()

function configureStore(initialState) {

  var sagaMiddleware = (0, _reduxSaga2.default)();

  /* eslint-disable no-underscore-dangle */
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  /* eslint-enable */

  // console.tron.createStore(rootReducer, middleware)

  /* eslint-disable no-console */
  // const store = process.env.NODE_ENV === 'production'
  // ?
  var store = (0, _redux.createStore)(_reducers2.default, initialState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default), (0, _redux.applyMiddleware)(sagaMiddleware)));
  // :
  // console.tron.createStore(
  //   rootReducer, initialState, composeEnhancers(
  //     applyMiddleware(thunk),
  //     applyMiddleware(sagaMiddleware)
  //   )
  // );

  sagaMiddleware.run(_sagas2.default);

  return store;
}

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
//
// import rootReducer from 'reducers';
//
// export default function configureStore(initialState) {
//   /* eslint-disable no-underscore-dangle */
//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   /* eslint-enable */
//   const store = createStore(rootReducer, initialState, composeEnhancers(
//     applyMiddleware(thunk)
//   ));
//
//   return store;
// }