import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers';
import mySaga from 'sagas'
// import Reactotron from 'reactotron-react-js'

// const sagaMonitor = Reactotron.createSagaMonitor()

export default function configureStore(initialState) {

  const sagaMiddleware = createSagaMiddleware(/*{ sagaMonitor }*/)

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  // console.tron.createStore(rootReducer, middleware)

  /* eslint-disable no-console */
  // const store = process.env.NODE_ENV === 'production'
  // ?
  const store=createStore(
    rootReducer, initialState, composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(sagaMiddleware)
    )
  )
  // :
  // console.tron.createStore(
  //   rootReducer, initialState, composeEnhancers(
  //     applyMiddleware(thunk),
  //     applyMiddleware(sagaMiddleware)
  //   )
  // );

  sagaMiddleware.run(mySaga)

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
