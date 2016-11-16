// import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import types from 'actions/types';


const allNumbers = (state = {}, action) => {
  switch (action.type) {
    case types.AWAITING_RANDOM_NUMBER: {
      const num={[action.id]:null}
      return Object.assign({},
        {...state,...num})
    }
    case types.ADD_RANDOM_NUMBER: {
      const num={[action.id]:action.number}
      return Object.assign({},
        {...state,...num})
    }
    default:
      return state;
  }
};


// AWAITING_RANDOM_NUMBER
const randomNumbers = (state = [], action) => {
  switch (action.type) {
    case types.AWAITING_RANDOM_NUMBER:
      return [...state,action.id];
    default:
      return state;
  }
};

export const getRandomNumbers = (state) =>
  state.randomNumbers.map((id) => state.allNumbers[id]);

const rootReducer = combineReducers({
  randomNumbers,
  allNumbers
});

export default rootReducer;
