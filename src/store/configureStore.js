/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { apiMiddleware} from 'redux-api-middleware';

import { routerMiddleware } from 'react-router-redux'

export default history => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(apiMiddleware, thunk, routerMiddleware(history)))
  )

  // return configureStore;
}
