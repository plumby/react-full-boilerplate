'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('actions');

var _reducers = require('reducers');

var _components = require('components');

function mapStateToProps(state) {
  var props = {
    randomList: (0, _reducers.getRandomNumbers)(state)
  };
  return props;
} // import React from 'react';


function mapDispatchToProps(dispatch) {
  var actions = { requestRandomNumber: _actions.requestRandomNumber };
  var actionMap = { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
  return actionMap;
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_components.RandomList);