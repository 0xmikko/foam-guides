/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import web3, * as fromWeb3 from './web3'

export default history =>
  combineReducers({
    router: connectRouter(history),
    web3,
  })

export const Web3 = state => fromWeb3.web3(state.web3)
export const web3status = state => fromWeb3.web3status(state.web3)
