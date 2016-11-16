import { takeEvery /*, takeLatest*/ } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import uuid from 'uuid'
import * as api from 'api'
import types from 'actions/types';
import * as actions from 'actions'

function* getRandomNumber() {
  try {
    const id=uuid.v4();
    yield put(actions.awaitingRandomNumber(id))
    const number=yield call(api.generateRandomNumber);
    yield put(actions.addRandomNumber(id,number))
  } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* mySaga() {
  yield takeEvery(types.REQUEST_RANDOM_NUMBER, getRandomNumber);
}

export default mySaga;
