import types from './types';


export function requestRandomNumber() {
  return {
    type: types.REQUEST_RANDOM_NUMBER
  }
}

export function addRandomNumber(number) {
  return {
    type: types.ADD_RANDOM_NUMBER,
    number
  }
}
