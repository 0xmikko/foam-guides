/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import web3, * as fromWeb3 from './web3'
import box, * as fromBox from './box'

export default history =>
  combineReducers({
    router: connectRouter(history),
    box,
    web3,
  })

export const Web3 = state => fromWeb3.web3(state.web3)
export const web3status = state => fromWeb3.web3status(state.web3)
export const web3accounts = state => fromWeb3.web3accounts(state.web3)
export const boxAccount = state => fromBox.boxAccount(state.box)
