// import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {requestRandomNumber} from 'actions';
import {getRandomNumbers} from 'reducers';
import {RandomList} from 'components';

function mapStateToProps(state) {
  const props = {
    randomList:getRandomNumbers(state)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {requestRandomNumber};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(RandomList);
