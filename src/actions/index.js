import types from './types';


export function requestRandomNumber() {
  return {
    type: types.REQUEST_RANDOM_NUMBER
  }
}


export function awaitingRandomNumber(id) {
  return {
    type: types.AWAITING_RANDOM_NUMBER,
    id
  }
}

export function addRandomNumber(id,number) {
  return {
    type: types.ADD_RANDOM_NUMBER,
    id,
    number
  }
}
