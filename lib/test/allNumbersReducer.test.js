// // import 'babel-polyfill'
// import reducers,{test} from 'reducers'
// import {expect} from 'chai'
// import types from 'actions/types';
//
// describe('allNumbers', () => {
//   describe('default constructor', () => {
//     it('should return empty allNumber object', () => {
//       const action={
//         type:''
//       }
//       const initState=reducers(undefined,action)
//
//       expect(initState.allNumbers).to.deep.equal({})
//     });
//   });
//
//   describe('adding random number request to empty object', () => {
//     it('should return one null item', () => {
//       const id='1234';
//       const action={
//         type:types.AWAITING_RANDOM_NUMBER,
//         id
//       }
//       const state=reducers(undefined,action)
//
//       expect(state.allNumbers).to.deep.equal({[id]: null})
//     });
//   });
//
//   describe('adding random number to empty object', () => {
//     it('should return one null item', () => {
//       const id='1234';
//       const number=Math.floor((Math.random() * 10) + 1);
//       const action={
//         type:types.ADD_RANDOM_NUMBER,
//         id,
//         number
//       }
//       const state=reducers(undefined,action)
//
//       expect(state.allNumbers).to.deep.equal({[id]: number})
//     });
//   });
//
//
//   describe('updating random number request with value', () => {
//     it('should return one item that goes from null to value', () => {
//       const id='1234';
//       const number=Math.floor((Math.random() * 10) + 1);
//       const awaitAction={
//         type:types.AWAITING_RANDOM_NUMBER,
//         id
//       }
//
//       const setAction={
//         type:types.ADD_RANDOM_NUMBER,
//         id,
//         number
//       }
//
//       const initState=reducers(undefined,awaitAction)
//
//       expect(initState.allNumbers).to.deep.equal({[id]: null})
//
//       const state=reducers(initState,setAction)
//
//       expect(state.allNumbers).to.deep.equal({[id]: number})
//     });
//   });
//
//
//   describe('updating two numbers out of order', () => {
//     const id1='1234';
//     const number1=Math.floor((Math.random() * 10) + 1);
//     const id2='5678';
//     const number2=Math.floor((Math.random() * 10) + 1);
//     let state;
//
//     it('should return one null item', () => {
//       const awaitAction={
//         type:types.AWAITING_RANDOM_NUMBER,
//         id:id1
//       }
//
//       state=reducers(undefined,awaitAction)
//
//       expect(state.allNumbers).to.deep.equal({[id1]: null})
//     });
//
//     it('should return two null items', () => {
//       const awaitAction={
//         type:types.AWAITING_RANDOM_NUMBER,
//         id:id2
//       }
//
//       state=reducers(state,awaitAction)
//
//       expect(state.allNumbers[id1]).to.equal(null)
//       expect(state.allNumbers[id2]).to.equal(null)
//     });
//     it('should set the second number, but not touch the first', () => {
//       const setAction={
//         type:types.ADD_RANDOM_NUMBER,
//         id:id2,
//         number:number2
//       }
//       state=reducers(state,setAction)
//
//       expect(state.allNumbers[id1]).to.equal(null)
//       expect(state.allNumbers[id2]).to.equal(number2)
//     });
//     it('should set the first number, but not touch the second', () => {
//       const setAction={
//         type:types.ADD_RANDOM_NUMBER,
//         id:id1,
//         number:number1
//       }
//
//       state=reducers(state,setAction)
//
//       expect(state.allNumbers[id1]).to.equal(number1)
//       expect(state.allNumbers[id2]).to.equal(number2)
//     });
//   });
// });
"use strict";